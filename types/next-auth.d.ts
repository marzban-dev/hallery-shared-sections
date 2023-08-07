import { ISigninResponse } from "apis/auth.types";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: IUser;
        accessToken: string;
        refreshToken: string;
        expires: DefaultSession["expires"];
    }

    interface User {
        tokens: ISigninResponse;
        info: IUser;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        info: IUser;
        tokenExpiry: number;
        error?: string;
    }
}
