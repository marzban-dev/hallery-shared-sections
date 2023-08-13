export {};

declare global {
    interface IImage {
        id: number;
        url: string;
        width: number;
        height: number;
        thumbnail: string;
    }

    interface IApproval {
        id: number;
        status: "P" | "A" | "R";
        response: string;
        response_date: string;
        art: number;
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
        dimension: string;
        created_at: string;
        likes_count: number;
        user_like: boolean;
        user_repost: boolean;
        approval: IApproval;
        approval_id: number;
    }

    interface ICreateArt {
        image: File;
        title: string;
        dimension?: string;
        description?: string;
        type?: string;
        technique?: string;
        location?: string;
        school?: string;
        reference?: string;
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
