"use client";

import IconUser from "shared/components/icons/user";
import UserProfile from "shared/components/user-profile";
import useAuth from "shared/hooks/use-auth";
import Item from "../item";

const Profile: React.FC = () => {
    const { user } = useAuth();

    return user ? (
        <Item href={`https://hallery.art/users/${user.username}`} text="Profile">
            <UserProfile />
        </Item>
    ) : (
        <Item icon={IconUser} href="/auth/signin" text="Profile" />
    );
};

export default Profile;
