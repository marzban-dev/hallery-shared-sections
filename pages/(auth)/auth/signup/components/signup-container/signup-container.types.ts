import { TOnFormSubmit } from "../../../../components/form-container/form-container.types";

export interface ISignupFormValues {
    username: string;
    email: string;
    password: string;
    invited_by: string;
}

export type TSignupOnSubmit = TOnFormSubmit<ISignupFormValues>;