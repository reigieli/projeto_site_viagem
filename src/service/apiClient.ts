import { ENDPOINTS } from "../config/endpoints";
import type { TokenResponse } from "../types/api";
import { tokenStorage } from "./tokenStorage";

const API_URL = 'https://api-a3-usab.duckdns.org/api/v1';

export class ApiError extends Error {
    status: number;
    details?: unknown;

    constructor(status: number, message: string, details?: unknown) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.details = details;
    }
}

type RequestOptions = {
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: unknown
    auth?: boolean // false para login/refresh/register
};

/*
    Função que permite outra parte da aplicação registre o que deve acontecer
    quando o token do usuário expire
*/
let onSessionExpired: (() => void) | null = null;
export function setSessionExpiredHandler(handler: (() =>void) | null) {
    onSessionExpired = handler
}


/*
    Função  que padroniza erros hhtp da api para uma
    forma amigavel para o frontend
*/
async function parseError(res: Response): Promise<ApiError> {
    let detail: unknown;
    try {
        detail = (await res.json()).detail;
    }
    catch {
        /* corpo vazio ou não-JSON */
    }

    let message = 'Erro inesperado. Tente novamente.';
    if (typeof detail === 'string'){
        message = detail;
    } else if (Array.isArray(detail) && detail.length > 0) {
        message = detail.map((d) => d.msg).join('; ');
    }
    return new ApiError(res.status, message, detail);
}

// Garante UMA renovação por vez
let refreshPromise: Promise<boolean> | null = null

// Aplica o refresh dos tokens
async function doRefresh(): Promise<boolean> {
    const refresh_token = tokenStorage.getRefresh();
    if (!refresh_token) return false;

    try {
        const res = await fetch(`${API_URL}${ENDPOINTS.auth.refresh}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token }),
        });
        if (!res.ok) {
            tokenStorage.clear();
            return false;
        }
        const data: TokenResponse = await res.json();
        tokenStorage.set(data.access_token, data.refresh_token);
        return true;
    } catch {
        return false;
    }
}

function refreshTokens(): Promise<boolean> {
    refreshPromise ??= doRefresh().finally(() => {
        refreshPromise = null;
    });
    return refreshPromise;
}

export async function request<T>(
  path: string,
  { method = 'GET', body, auth = true }: RequestOptions = {}
): Promise<T> {

    const send = () => {
        const headers: Record<string, string> = {};
        if (body !== undefined) headers['Content-Type'] = 'application/json';
        const access = tokenStorage.getAccess();
        if (auth && access) headers.Authorization = `Bearer ${access}`;

        return fetch(`${API_URL}${path}`, {
            method,
            headers,
            body: body !== undefined ? JSON.stringify(body) : undefined,
        });
    };

    let res = await send();
    if (res.status === 401 && auth && tokenStorage.getRefresh()) {
        if (await refreshTokens()) {
            res = await send();
        } else {
            onSessionExpired?.();
        }
    }

    if (!res.ok) throw await parseError(res);
    if (res.status === 204) return undefined as T;
    return res.json() as Promise<T>;
}