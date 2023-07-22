import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const checkServerSideAuth = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }
};
