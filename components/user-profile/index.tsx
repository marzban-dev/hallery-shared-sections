"use client";

import Avatar from "shared/components/avatar";
import useAuth from "shared/hooks/use-auth";

const UserProfile: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="relative flex items-center justify-center">
            {user && <Avatar className="h-[28px] w-[28px]" picture={user.profile_img} title={user.username} priority />}
        </div>
    );
};
export default UserProfile;
