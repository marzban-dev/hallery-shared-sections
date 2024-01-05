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
        artist: IArtist;
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
        friends_like : [];
        views_count : number;
    }

    //     artist: {
    //         id: 5566,
    //         owner: {
        //         id: 2,
    //             username: 'mansour',
    //             first_name: 'Mansour18',
    //             profile_img: 'https://api.hallery.art/media/2/profile/nN9eyZ59QN7ijiZ0NwvE6iK16BbleB2xUw0sil7p.jpg',
    //             invited_by: null,
    //             following: false,
    //             verify: false,
    //             artist: 5566,
    //             chat: 1
        //     },
    //         name: 'Mansour',
    //         profile_image: 'https://api.hallery.art/media/2/artist/profile/ETGBlMVHoEJjgMYbWB6ueorid3q9hTp55Q7x7X7d.png',
    //         following: false,
    //         verify: false,
    //         header: null
        // },
    // views_count: 4







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
