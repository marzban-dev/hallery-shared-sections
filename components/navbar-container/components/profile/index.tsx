"use client";

import { useSession } from "next-auth/react";
import Item from "../item";
import UserProfile from "shared/components/user-profile";
import IconUser from "shared/components/icons/user";

const Profile: React.FC = () => {
    const { data } = useSession();

    return data?.user ? (
        <Item href={`/users/${data.user.username}`} text="Profile">
            <UserProfile />
        </Item>
    ) : (
        <Item icon={IconUser} href="/auth/signin" text="Profile" />
    );
};

export default Profile;
