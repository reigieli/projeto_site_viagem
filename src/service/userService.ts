import { ENDPOINTS } from "../config/endpoints";
import type { UserResponse, UserUpdateRequest } from "../types/user";
import { request } from "./apiClient";

class UserService {

    // GET /users/me
    async getPerfil(): Promise<UserResponse> {
        return request<UserResponse>(ENDPOINTS.users.me);
    }

    // PATCH /users/me — devolve o usuário já atualizado
    async atualizarPerfil(data: UserUpdateRequest): Promise<UserResponse> {
        return request<UserResponse>(ENDPOINTS.users.me, {
            method: 'PATCH',
            body: data,
        });
    }
}

export const userService = new UserService();
