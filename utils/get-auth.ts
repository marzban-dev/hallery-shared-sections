
const getAuth = (cookies : any) => {

    const authData: { user: IUser | null; token: string | null } = {
        user: null,
        token: null,
    };

    const tokens = cookies.get("auth-tokens");
    const user = cookies.get("auth-user");

    if (!tokens || !user) return authData;

    try {
        const isUserOk = typeof user === "object" && Object.hasOwn(user, "username");
        const isTokensOk = typeof tokens === "object" && Object.hasOwn(tokens, "accessToken");

        if (isTokensOk && isUserOk) {
            authData.user = user;
            authData.token = tokens.accessToken;
        }
    } catch (e) {
        console.log(e);
        console.log("Server auth tokens parse error");
    }

    return authData;
};

export default getAuth;
