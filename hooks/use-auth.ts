import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "shared/apis/auth.api";
import Cookies from "universal-cookie";

// @ts-ignore
const cookies = new Cookies();

export interface ITokens {
    accessToken: string;
    refreshToken: string;
}

const useAuth = () => {
    const [user, setUser] = useState<null | IUser>(null);
    const [token, setToken] = useState<null | string>(null);

    const { push } = useRouter();

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = () => {
        const tokens = cookies.get("auth-tokens");
        const user = cookies.get("auth-user");

        if (!tokens || !user) return push("/auth/signin");

        try {
            const parsedTokens = tokens as ITokens;
            const parsedUser = user as IUser;

            const isUserOk = typeof parsedUser === "object" && Object.hasOwn(parsedUser, "username");
            const isTokensOk = typeof parsedTokens === "object" && Object.hasOwn(parsedTokens, "accessToken");

            if (isTokensOk && isUserOk) {
                setToken(parsedTokens.accessToken);
                setUser(parsedUser);

                return;
            }

            return push("/auth/signin");
        } catch (e) {
            console.log("Auth tokens parse error");
            return push("/auth/signin");
        }
    };

    const update = async (data?: { tokens?: ITokens; user?: IUser }) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (data) {
            if (data.tokens) {
                cookies.set("auth-tokens", data.tokens, { expires: tomorrow, path: "/" });
                setToken(data.tokens.accessToken);
            }

            if (data.user) {
                cookies.set("auth-user", data.user, { expires: tomorrow, path: "/" });
                setUser(data.user);
            }
        } else {
            const updatedUser = await getUser(user!.username);
            cookies.set("auth-user", updatedUser, { path: "/" });
            setUser(updatedUser);
        }
    };

    return { user, token, update };
};

export default useAuth;
