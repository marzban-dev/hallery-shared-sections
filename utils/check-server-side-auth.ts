import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "shared/config/auth";

const checkAuth = async () => {
    const session = await getServerSession(authOptions);
    // const isTokenValid = await checkTokenValidity();

    return { session };
};

export const checkServerAuth = async () => {
    const { session } = await checkAuth();

    if (!session) {
        redirect("/auth/signin");
    }
};

export const checkDashboardServerAuth = async () => {
    const { session } = await checkAuth();

    if (!session) {
        redirect("/auth/signin");
    }

    if (session && !session.user.artist) {
        redirect("/become-an-artist");
    }
};
