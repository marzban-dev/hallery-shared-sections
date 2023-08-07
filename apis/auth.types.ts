export interface ISigninRequestParams {
    username: string;
    password: string;
}

export interface ISigninResponse {
    access: string;
    refresh: string;
}

export interface ISignupRequestParams {
    username: string;
    email: string;
    password: string;
}

export interface ISignupResponse {
    id: number;
    username: string;
    email: string;
}

export interface IGetUserResponse extends IUser {}

export interface IResetPasswordRequestParams {
    email: string;
}

export interface IConfirmResetPasswordRequestParams {
    uid: string;
    token: string;
    new_password: string;
}
