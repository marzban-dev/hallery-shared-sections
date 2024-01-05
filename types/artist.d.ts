export {};

declare global {
    interface IArtist {
        id: number;
        name: string;
        owner: IUser;
        birth_data: string;
        profession: string;
        school: string;
        bio: string;
        profile_image: string;
        header: IImage;
        verify: boolean;
        wikipedia: string | null;
        following: boolean;
        views_count: number;
        followers_count: number;
        created_at: string;
        likes_count: number;
    }
}
