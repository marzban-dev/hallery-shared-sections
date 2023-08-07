import axios from "shared/config/axios";
import {
    ISigninRequestParams,
    ISigninResponse,
    ISignupRequestParams,
    ISignupResponse,
    IGetUserResponse,
    IResetPasswordRequestParams,
    IConfirmResetPasswordRequestParams,
} from "./auth.types";

export const signin = async (params: ISigninRequestParams) => {
    const response = await axios.post<ISigninResponse>("/auth/jwt/create/", {
        username: params.username,
        password: params.password,
    });

    return response.data;
};

export const signup = async (params: ISignupRequestParams) => {
    const response = await axios.post<ISignupResponse>("/auth/users/", {
        username: params.username,
        email: params.email,
        password: params.password,
    });

    return response.data;
};

export const getUser = async () => {
    const response = await axios.get<IGetUserResponse>("/user/my/myinfo/");
    return response.data;
};

export const refreshAccessToken = async (token: any) => {
    try {
        const response = await axios.post("/auth/jwt/refresh/", {
            refresh: token.refreshToken,
        });

        const refreshedTokens = response.data;

        if (response.status !== 200) {
            throw refreshedTokens;
        }

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
