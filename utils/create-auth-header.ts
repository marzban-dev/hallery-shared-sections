import { authOptions } from "config/auth";
import { getServerSession} from "next-auth/next";
import { getSession } from "next-auth/react";

const createAuthHeader = async () => {
    let session = null;

    if (typeof window === "undefined") {
        session = await getServerSession(authOptions);
    } else {
        session = await getSession();
    }

    if (session) {
        return {
            Authorization: `Bearer ${session.accessToken}`,
        };
    }

    return {};
};

export default createAuthHeader;
