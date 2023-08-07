export { };

declare global {
    interface IUser {
        first_name: string;
        last_name: string;
        username: string;
        profile_img: string;
        header_img: string;
        date_joined: string;
        bio: string;
        link: string;
        location: string;
        following: boolean;
        artist: number;
        verify: boolean;
        followings_count: number;
        followers_count: number;
        artist_followings_count: number;
    }

    interface ISimpleUser {
        username: string;
        first_name: string;
        profile_img: string;
        following: boolean;
    }

    interface INotification {
        id: number;
        type: "f" | "rl";
        obj: IUser;
        object_id: string;
        date: string;
        is_read: boolean;
        owner: IUser;
    }
}
