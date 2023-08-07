export interface IFollowUserRequestParams extends IApiRequest {
    id: string;
    type: "user" | "artist";
}

export interface IGetUserProfileRequestParams extends IApiRequest {
    id: string;
}

export interface IGetUserProfileResponse extends IUser {}

export interface IGetArtistRequestParams extends IApiRequest {
    id: string;
}

export interface IGetArtistResponse extends IArtist {}

type TOrdering = "birth_date" | "school" | "profession" | "name";

export interface IGetArtistsRequestParams extends IApiRequest {
    pageParam: {
        name__icontains?: string;
        birth_date__icontains?: string;
        profession__icontains?: string;
        school__icontains?: string;
        ordering?: TOrdering | `-${TOrdering}`;
        limit?: number;
        offset?: number;
    };
}

export interface IGetArtistsResponse extends IApiInfiniteResponse<IArtist> {}

export interface IGetFollowersRequestParams extends IApiRequest {
    pageParam: {
        id: string | number;
        type: "user" | "artist";
        limit: number;
        page: number;
    };
}

export interface IGetFollowersResponse extends IApiInfiniteResponse<ISimpleUser> {}

export interface IGetFollowingRequestParams extends IApiRequest {
    pageParam: {
        id: string | number;
        type: "user" | "artist";
        limit: number;
        page: number;
    };
}

export interface IGetFollowingResponse extends IApiInfiniteResponse<ISimpleUser> {}

export interface IGetFollowingArtistRequestParams extends IApiRequest {
    pageParam: {
        id: string;
        limit: number;
        page: number;
    };
}

export interface IGetFollowingArtistResponse extends IApiInfiniteResponse<ISimpleArtist> {}

export interface IGetNotificationsRequestParams extends IApiRequest {
    pageParam: {
        limit: number;
        page: number;
    };
}

export interface IGetNotificationsResponse extends IApiInfiniteResponse<INotification> {}

export interface ISeenNotificationsRequestParams extends IApiRequest {
    id: number;
}

export interface IUpdateSettingsRequestParams extends IApiRequest {
    first_name?: string;
    last_name?: string;
    profile_img?: File;
    header_img?: File;
    bio?: string;
    link?: string;
    location?: string;
    password?: string;
}

export interface IRequestArtistRequestParams extends IApiRequest {
    requested_artist: string;
    message: string;
    user: string;
}
