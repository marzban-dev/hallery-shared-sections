import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";

const createAuthHeader = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        return {
            Authorization: `Bearer ${session.accessToken}`,
        };
    }

    return {};
};

export default createAuthHeader;
