export { };

declare global {
    interface IArtist {
        id: number;
        name: string;
        birth_data: string;
        profession: string;
        school: string;
        bio: string;
        image: string;
        header: IImage;
        wikipedia: string | null;
        following: boolean;
        followers_count: number;
        views_count: number;
    }

    interface ISimpleArtist {
        id: number;
        name: string;
        image: string;
        profession: string;
        following: boolean;
    }
}
