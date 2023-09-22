import UniversalCookies from "universal-cookie";
import getAuth from "./get-auth";

const createAuthHeader = async (cookies?: any) => {
    const universalCookies = new UniversalCookies(cookies);

    const session = getAuth(universalCookies);
    const token = session.token;

    if (token) {
        return {
            Authorization: `Bearer ${token}`,
        };
    }

    return {};
};

export default createAuthHeader;
