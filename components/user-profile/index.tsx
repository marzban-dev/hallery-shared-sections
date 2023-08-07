import { getServerSession } from "next-auth";
import Avatar from "shared/components/avatar";

const UserProfile: unknown = async () => {
    const session = await getServerSession();

    return (
        <div className="relative flex items-center justify-center">
            {session && (
                <Avatar
                    className="h-[28px] w-[28px]"
                    picture={session.user.profile_img}
                    title={session.user.username}
                    priority
                />
            )}
        </div>
    );
};
export default UserProfile as React.FC;