import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import Button from "@/shared/components/button";
import Logo from "@/shared/components/logo";
import UserProfile from "@/shared/components/user-profile";
import useAuth from "@/shared/hooks/use-auth";
import { IFormContainerProps } from "./form-container.types";

const FormContainer: React.FC<IFormContainerProps> = ({ initial, schema, onSubmit, title, children, formState }) => {
    const { user } = useAuth();
    const formType = title.includes("Create") ? "singup" : "signin";

    return (
        <Formik initialValues={initial} validationSchema={schema} onSubmit={onSubmit}>
            {({ status, isSubmitting }) => (
                <div className="relative z-20 flex h-screen w-full items-center justify-center min-[1100px]:w-[50%]">
                    <Form
                        className="flex w-[320px] flex-col items-center justify-center min-[400px]:w-[360px] min-[500px]:w-[400px]"
                        autoComplete="off"
                    >
                        <div className="top-0 flex w-[320px] items-center justify-between pb-[60px] text-white max-[500px]:fixed max-[500px]:pt-6 min-[400px]:w-[360px] min-[500px]:w-[400px]">
                            <Logo />
                            <ul className="flex items-center justify-end gap-4">
                                <li>
                                    <Link href="/arts">Home</Link>
                                </li>
                                <li>
                                    <Link href="/search">Search</Link>
                                </li>
                                {user && (
                                    <li>
                                        <Link href={`https://hallery.art/users/${user?.username}`}>
                                            <UserProfile />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* <div className="absolute top-[25px] z-20 flex w-full items-center justify-between gap-8 px-[25px]">
                                <PageNavbarDynamic />
                            </div> */}
                        <div className="flex w-full flex-col items-start justify-center gap-4">
                            <div className="mb-[35px]">
                                <h1 className="whitespace-nowrap pb-3 text-[35px] font-semibold text-white min-[500px]:text-[40px]">
                                    {title}
                                </h1>
                                <span className="ml-1 text-[rgb(150,150,150)] min-[500px]:text-[18px]">
                                    {formType === "singup" ? "Have an account? " : "New to artgram? "}
                                    <Link
                                        href={formType === "singup" ? "/auth/signin" : "/auth/signup"}
                                        className="text-blue-500"
                                    >
                                        {formType === "singup" ? "Sign in now" : "Sign up now"}
                                    </Link>
                                </span>
                            </div>
                            {children}
                            {formType !== "singup" && (
                                <Link href="/auth/signin" className="ml-1 text-blue-500">
                                    Forgot password?
                                </Link>
                            )}
                            {status && (
                                <div className="ml-1 mt-2 flex items-center justify-start gap-2 text-[16px] font-medium text-red-400">
                                    {status}
                                </div>
                            )}
                            <Button
                                className="mt-8"
                                type="submit"
                                loading={formState === "loading"}
                                disabled={isSubmitting}
                                gradient
                                fullWidth
                            >
                                {formType === "signin" ? 'Signin' : 'Signup'}
                            </Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default FormContainer;
