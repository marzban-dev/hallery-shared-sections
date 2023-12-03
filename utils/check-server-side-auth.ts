import { redirect } from "next/navigation";
import getServerAuth from "./get-server-auth";

export const checkServerAuth = () => {
    const { token } = getServerAuth();

    if (!token) {
        redirect("/auth/signin");
    }
};

export const checkDashboardServerAuth = () => {
    const { token, user } = getServerAuth();

    if (!token || !user) {
        redirect("/auth/signin");
    }

    if (token && user && !user.artist) {
        redirect("/become-an-artist");
    }
};

