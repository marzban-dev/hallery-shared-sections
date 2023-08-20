"use client";

import { useSession } from "next-auth/react";
import Avatar from "shared/components/avatar";

const UserProfile: React.FC = () => {
    const { data } = useSession();

    return (
        <div className="relative flex items-center justify-center">
            {data?.user && (
                <Avatar
                    className="h-[28px] w-[28px]"
                    picture={data.user.profile_img}
                    title={data.user.username}
                    priority
                />
            )}
        </div>
    );
};
export default UserProfile;
