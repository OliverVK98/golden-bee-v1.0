import {AxiosResponse} from "axios";
import $api from "../../lib/axios";
import {IDtoUser} from "./user-dto";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/api/auth/sign-in', {email, password})
    }

    static async registration(email: string, password: string, firstName: string, lastName: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/api/auth/sign-up', {email, password, firstName, lastName})
    }

    static async logout(): Promise<void> {
        return $api.post('/api/auth/logout')
    }

    static async getCart(): Promise<AxiosResponse<any>> {
        return $api.get('/api/user-cart')
    }

    static async updateUserInformation(firstName: string, lastName: string, email: string) {
        return await $api.post("/api/auth/update-user-information", {
            firstName,
            lastName,
            email,
        });
    }

    static async changePassword(userPassword: string, currentPassword: string) {
        return await $api.post("/api/auth/change-password", {
            userPassword,
            currentPassword
        });
    }
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IDtoUser
}
