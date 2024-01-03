import axios from "@/shared/config/axios";
import customFetch from "@/shared/config/fetch";
import {
    IConfirmResetPasswordRequestParams,
    IResetPasswordRequestParams,
    ISigninRequestParams,
    ISigninResponse,
    ISignupRequestParams,
    ISignupResponse,
} from "./auth.types";

export const signin = async (params: ISigninRequestParams) => {
    const response = await customFetch<ISigninResponse>("/auth/jwt/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: params.username,
            password: params.password,
        }),
    });

    return response;
};

export const signup = async (params: ISignupRequestParams) => {
    const response = await axios.post<ISignupResponse>("/auth/users/", {
        username: params.username,
        email: params.email,
        password: params.password,
        invited_by : params.invited_by
    });

    return response.data;
};

export const getUser = async (token: string) => {
    return await customFetch<IUser>(`/auth/jwt/me/`, {
        cache: "no-cache",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
    });
};

export const refreshAccessToken = async (token: any) => {
    try {
        const refreshedTokens = await customFetch<{ access: string; refresh: string }>("/auth/jwt/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: token.refreshToken }),
        });

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return {
            ...token,
            accessToken: refreshedTokens.access,
            tokenExpiry: tomorrow.getTime(),
            refreshToken: refreshedTokens.refresh ?? token.refreshToken, // Fall back to old refresh token
        };
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
};

export const sendEmailForResetPassword = async (params: IResetPasswordRequestParams) => {
    const response = await axios.post("/auth/users/reset_password/", {
        email: params.email,
    });

    return response.data;
};

export const confirmResetPassword = async (params: IConfirmResetPasswordRequestParams) => {
    const response = await axios.post("/auth/users/reset_password_confirm/", params);

    return response.data;
};
