"use client";

import {signup} from "@/shared/apis/auth.api";
import FormContainer from "../../../../components/form-container";
import FormInput from "../../../../components/form-input";
import {AxiosError} from "axios";
import {NextPage} from "next";
import {useRouter} from "next/navigation";
import {useState} from "react";
import IconEnvelope from "@/shared/components/icons/envelope";
import IconLock from "@/shared/components/icons/lock";
import IconUser from "@/shared/components/icons/user";
import * as Yup from "yup";
import {TFormState} from "../../../../components/form-container/form-container.types";
import {ISignupFormValues, TSignupOnSubmit} from "./signup-container.types";
import useQueryString from "@/shared/hooks/use-query-string";
import IconLinkStroke from "@/shared/components/icons/link-stroke";

const SignupContainer: NextPage = () => {
    const router = useRouter();
    const {queryParams} = useQueryString();
    const inviteSlug = queryParams.get("invite_slug");

    const [formState, setFormState] = useState<TFormState>("idle");

    const schema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Username is too short")
            .max(20, "Username must lower than 20 char")
            .required("Username is required"),
        email: Yup.string().email("Email is not valid").required("Email is required"),
        password: Yup.string().min(8, "Password must bigger than 7 char").required("Password is required"),
        invited_by: Yup.string().required("Invite code is required"),
    });

    const onSubmit: TSignupOnSubmit = async (values, {setSubmitting, setStatus}) => {
        try {
            setFormState("loading");
            setStatus(null);

            await signup({
                username: values.username,
                password: values.password,
                email: values.email,
                invited_by: values.invited_by,
            });

            setFormState("success");
            router.push("/auth/signin");
        } catch (e) {
            const error = e as AxiosError;

            setFormState("error");

            if (error.response && error.response.status === 401) {
                setStatus("Your credential is incorrect.");
            } else if (error.response && error.response.status === 400) {
                if (Object.hasOwn(error.response.data!, "non_field_errors")) {
                    setStatus("Your invite token is invalid");
                } else {
                    setStatus("This username or email is already taken");
                }
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

    const initialValue: ISignupFormValues = {username: "", password: "", email: "", invited_by: inviteSlug ?? ""};

    return (
        <FormContainer
            schema={schema}
            onSubmit={onSubmit}
            initial={initialValue}
            title="Create account"
            formState={formState}
        >
            <FormInput
                id="username"
                name="username"
                placeholder="Name"
                autoComplete="new-password"
                rightElement={IconUser}
            />
            <FormInput
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                autoComplete="new-password"
                rightElement={IconEnvelope}
            />
            <FormInput
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="new-password"
                rightElement={IconLock}
            />
            <FormInput
                id="invited_by"
                name="invited_by"
                placeholder="Invite Code"
                autoComplete="new-password"
                rightElement={IconLinkStroke}
            />
        </FormContainer>
    );
};

export default SignupContainer;
