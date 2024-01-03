import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { ISignupFormValues } from "../../auth/signup/components/signup-container/signup-container.types";
import { ISigninFormValues } from "../../auth/signin/components/signin-container/signin-container.types";

export type TFormState = "loading" | "success" | "error" | "idle";

export type TOnFormSubmit<T> = (values: T, formikHelpers: FormikHelpers<T>) => void;

export interface IFormContainerProps {
    initial: ISigninFormValues | ISignupFormValues;
    schema: Yup.AnyObjectSchema;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
    title: string;
    children: any;
    formState: TFormState;
}
