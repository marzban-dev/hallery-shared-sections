import { redirect } from "next/navigation";
import getServerAuth from "./get-server-auth";
import { useEffect } from "react";
import { protectedRoutes } from "@/shared/constants/protectedRoutes";
import getPathname from "@/shared/utils/get-pathname";

export const checkServerAuth = () => {
    const { token } = getServerAuth();

    if (!token) {
        redirect("/auth/signin");
    }
};

export const checkDashboardServerAuth = () => {
    const { token, user } = getServerAuth();
    const pathname = getPathname();

    const checkAccess = () => {
        return protectedRoutes.some((route) => pathname.includes(route));
    };

    const isProtected = checkAccess();

    if (isProtected && (!token || !user)) {
        redirect("/auth/signin");
    }

    if (token && user && !user.artist) {
        redirect("/become-an-artist");
    }
};

