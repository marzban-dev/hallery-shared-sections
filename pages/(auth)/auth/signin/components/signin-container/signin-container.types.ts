import { TOnFormSubmit } from "../../../../components/form-container/form-container.types";


export interface ISigninFormValues {
    username: string;
    password: string;
}

export type TSigninOnSubmit = TOnFormSubmit<ISigninFormValues>;
