"use client";

import Avatar from "shared/components/avatar";
import { useSession } from "next-auth/react";

const UserProfile: React.FC = () => {
    const { data } = useSession();

    return (
        <div className="relative flex items-center justify-center">
            <Avatar
                className="h-[28px] w-[28px]"
                picture={data!.user.profile_img}
                title={data!.user.username}
                priority
            />
        </div>
    );
};
export default UserProfile;
