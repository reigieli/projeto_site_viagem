import type { UserResponse } from "./user";

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    refresh_expires_in: number;
    user: UserResponse;
}