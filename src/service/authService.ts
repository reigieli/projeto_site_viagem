import { ENDPOINTS } from "../config/endpoints";
import type { UserLoginRequest } from "../types/user";
import type { UserCreateRequest } from "../types/user";
import type { UserResponse } from "../types/user";
import type { TokenResponse } from "../types/api";
import { ApiError, request } from "./apiClient";
import { tokenStorage } from "./tokenStorage";



class AuthSerivce {

    // POST /auth/login
    async login({ email, password }: UserLoginRequest): Promise<UserResponse> {
        const data = await request<TokenResponse>(ENDPOINTS.auth.login, {
            method: 'POST',
            auth:false,
            body: {email, password},
        });
        tokenStorage.set(data.access_token, data.refresh_token);
        return data.user;
    }

    // POST /auth/register (já devolve os tokens, então o usuário fica logado)
    async cadastro({name, email, cpf, password}: UserCreateRequest): Promise<UserResponse> {
        const data = await request<TokenResponse>(ENDPOINTS.auth.register, {
            method: 'POST',
            auth: false,
            body: { name, email, cpf, password},
        });
            tokenStorage.set(data.access_token, data.refresh_token);
            return data.user;
        }
    
    // GET /auth/me
    async getUsuarioAtual(): Promise<UserResponse | null> {
        if (!tokenStorage.getAccess() && !tokenStorage.getRefresh()) return null;

        try {
        const user = await request<UserResponse>(ENDPOINTS.auth.me);
        return user;
        } catch (error) {
        if (error instanceof ApiError && error.status === 401) {
            tokenStorage.clear();
            return null;
        }
        throw error; // erro de rede/servidor: o contexto decide
        }
    }

    // POST /auth/logout
    async logout(): Promise<void> {
        try {
        if (tokenStorage.getAccess()) {
            await request(ENDPOINTS.auth.logout, { method: 'POST' });
        }
        } catch {
        // se o servidor falhar, o usuário ainda sai localmente
        } finally {
        tokenStorage.clear();
        }
    }
}

export const authService = new AuthSerivce();