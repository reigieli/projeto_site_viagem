export type UserRole = 'CLIENT' | 'ADMIN';

export interface UserResponse {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    role: UserRole;
    is_active: boolean;
    create_at: string;
}

export interface UserCreateRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
}

export interface UserLoginRequest {
    email: string;
    password: string
}

export interface UserUpdateRequest {
    name?: string;
    email?: string;
}
