"use client";

import FormContainer from "../../../../components/form-container";
import FormInput from "../../../../components/form-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUser, signin } from "@/shared/apis/auth.api";
import IconLock from "@/shared/components/icons/lock";
import IconUser from "@/shared/components/icons/user";
import useAuth from "@/shared/hooks/use-auth";
import * as Yup from "yup";
import { TFormState } from "../../../../components/form-container/form-container.types";
import { ISigninFormValues, TSigninOnSubmit } from "./signin-container.types";
import { AxiosError } from "axios";

const SigninContainer: React.FC = () => {
    const { update } = useAuth();
    const { push } = useRouter();
    const [formState, setFormState] = useState<TFormState>("idle");

    const schema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Username is too short")
            .max(20, "Username must lower than 20 char")
            .required("Username is required"),
        password: Yup.string().min(8, "Password must bigger than 7 char").required("Password is required"),
    });

    const onSubmit: TSigninOnSubmit = async (values, { setSubmitting, setStatus }) => {
        setFormState("loading");
        setStatus(null);

        try {
            const authTokens = await signin({
                username: values.username,
                password: values.password,
            });

            const user = await getUser(authTokens.access);

            await update({
                tokens: {
                    accessToken: authTokens.access,
                    refreshToken: authTokens.refresh,
                },
                user,
            });

            setFormState("success");
            push("/dashboard");
        } catch (e) {
            const error = e as AxiosError;

            setFormState("error");

            console.log(error);

            if (error.response && error.response.status === 401) {
                setStatus("Your credential is incorrect.");
            } else {
                setStatus("Something went wrong");
            }

            setTimeout(() => {
                setStatus(null);
                setFormState("idle");
            }, 2500);
        }

        setSubmitting(false);
    };

    const initialValue: ISigninFormValues = { username: "", password: "" };

    return (
        <FormContainer
            schema={schema}
            onSubmit={onSubmit}
            initial={initialValue}
            title="Sign in to account"
            formState={formState}
        >
            <FormInput id="username" name="username" placeholder="Name" autoComplete="off" rightElement={IconUser} />
            <FormInput
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="off"
                rightElement={IconLock}
            />
        </FormContainer>
    );
};

export default SigninContainer;
