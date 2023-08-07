export {};

declare global {
    interface IImage {
        id: number;
        url: string;
        width: number;
        height: number;
        thumbnail: string;
    }

    interface IArt {
        id: number;
        artist: ISimpleArtist;
        title: string;
        description: string;
        image: IImage;
        date: string;
        technique: string;
        location: string;
        type: string;
        form: string;
        school: string;
        reference: string;
        likes_count: number;
        views_count: number;
        user_like: boolean;
        user_repost: boolean;
    }

    interface ISavedArt {
        id: number;
        owner: IUser;
        text: string;
        created_date: string;
        art: IArt;
    }

    interface IArtLike {
        id: number;
        owner: ISimpleUser;
        created_date: string;
        art: IArt;
    }
}
