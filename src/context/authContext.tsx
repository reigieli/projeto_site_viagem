import {createContext, useContext, useState, useEffect, useMemo, useCallback} from "react";
import type { ReactNode } from 'react';
import type { UserResponse, UserLoginRequest, UserCreateRequest, UserUpdateRequest } from "../types/user";
import { authService } from "../service/authService";
import { userService } from "../service/userService";
import { setSessionExpiredHandler } from "../service/apiClient";

interface AuthContextType {
    usuario: UserResponse | null;
    ehAutenticado: boolean;
    estaCarregando: boolean;
    login: (credenciais: UserLoginRequest) => Promise<void>;
    cadastro: (data: UserCreateRequest) => Promise<void>;
    logout: () => Promise<void>;
    atualizarUsuario: (data: UserUpdateRequest) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider( { children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<UserResponse | null>(null)
    const [estaCarregando, setEstaCarregando] = useState(true);

    // restaura a sessão ao abrir o app
    useEffect(() => {
        let cancelado = false;

        authService
            .getUsuarioAtual()
            .then((atual) => !cancelado && setUsuario(atual))
            .catch((error) => {
               console.error('Falha ao restaurar sessão', error);
                if (!cancelado) setUsuario(null);
            })
            .finally(() => !cancelado && setEstaCarregando(false));
        return () => {
            cancelado = true;
        };
    }, []);

    useEffect(() => {
        setSessionExpiredHandler(() => setUsuario(null));
        return () => setSessionExpiredHandler(null);
    }, []);

    const login = useCallback(async (credenciais: UserLoginRequest) => {
        setUsuario(await authService.login(credenciais));
    }, []);

    const cadastro = useCallback(async (data:UserCreateRequest) => {
        setUsuario(await authService.cadastro(data));
    }, [])

    const logout = useCallback(async () => {
        await authService.logout();
        setUsuario(null);
    }, []);

     // PATCH /users/me — o usuário do contexto é trocado pelo devolvido pela API,
    // então o Header e a tela Minha Conta ficam sempre sincronizados
    const atualizarUsuario = useCallback(async (data: UserUpdateRequest) => {
        setUsuario(await userService.atualizarPerfil(data));
    }, []);

    const value = useMemo(
        () => ({
        usuario,
        ehAutenticado: usuario !== null,
        estaCarregando,
        login,
        cadastro,
        logout,
        atualizarUsuario,
        }),
        [usuario, estaCarregando, login, cadastro, logout,atualizarUsuario]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
    }
    return context
}