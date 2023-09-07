import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser, refreshAccessToken, signin } from "shared/apis/auth.api";

export const authOptions: NextAuthOptions = {
    secret: "SECRET",
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: {
                    label: "Name",
                    type: "text",
                    placeholder: "Enter Your Name",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Your Password",
                },
            },
            async authorize(credentials) {
                try {
                    const authTokens = await signin({
                        username: credentials!.username,
                        password: credentials!.password,
                    });

                    const user = await getUser(credentials!.username);

                    const userData = {
                        tokens: authTokens,
                        info: user,
                    };

                    return userData as any;
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user, trigger }) => {
            if (trigger === "update") {
                const latestInfo = await getUser(token.info.username);
                token.info = latestInfo;
            }

            // Attach authorized user info to next-auth token
            if (user) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);

                token.accessToken = user.tokens.access;
                token.refreshToken = user.tokens.refresh;
                token.info = user.info;
                token.tokenExpiry = tomorrow.getTime();
            }

            // Return previous token if the access token has not expired yet
            if (token.accessToken && token.tokenExpiry && Date.now() < token.tokenExpiry) return token;
            // Access token has expired, try to update it
            else if (token.refreshToken) return await refreshAccessToken(token);
            
            return {
                ...token,
                error: "TokenValidationError",
            };
        },
        session: async ({ token, session }) => {
            if (token.error || (token.tokenExpiry && Date.now() > token.tokenExpiry)) {
                return Promise.reject({
                    error: new Error("Refresh token has expired. Please log in again to get a new refresh token."),
                });
            }

            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.user = token.info;

            return Promise.resolve(session);
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
};
