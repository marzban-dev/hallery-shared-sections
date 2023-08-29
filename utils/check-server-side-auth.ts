import { authOptions } from "shared/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { checkTokenValidity } from "shared/apis/auth.api";

const checkAuth = async () => {
    const session = await getServerSession(authOptions);
    const isTokenValid = await checkTokenValidity();

    return { session, isTokenValid };
};

export const checkServerAuth = async () => {
    const { isTokenValid, session } = await checkAuth();

    if (!session || !isTokenValid) {
        redirect("/auth/signin");
    }
};

export const checkDashboardServerAuth = async () => {
    const { isTokenValid, session } = await checkAuth();

    if (!session || !isTokenValid) {
        redirect("/auth/signin");
    }

    if (session && !session.user.artist) {
        redirect("/become-an-artist");
    }
};
