/**
 * Apis request, response types
 */

type TOrdering =
    | "artist"
    | "title"
    | "date"
    | "technique"
    | "form"
    | "school"
    | "type"
    | "location"
    | "reference"
    | "likes_count"
    | "most_viewed"
    | "most_liked"
    | "most_reposted";

export interface IGetArtsRequestParams extends IApiRequest {
    pageParam: {
        artist?: number;
        artist__name__icontains?: string;
        title__icontains?: string;
        date__icontains?: string;
        technique__icontains?: string;
        form__icontains?: string;
        school__icontains?: string;
        type__icontains?: string;
        location__icontains?: string;
        fields?: string;
        ordering?: TOrdering | `-${TOrdering}`;
        limit?: number;
        offset?: number;
    };
}

export interface IGetArtsResponse extends IApiInfiniteResponse<IArt> {}

export interface IGetArtRequestParams extends IApiRequest {
    id: number;
}

export interface IGetArtResponse extends IArt {}

export interface ILikeArtRequestParams extends IApiRequest {
    id: number;
}

export interface IUnlikeArtRequestParams extends IApiRequest {
    id: number;
}

export interface IGetArtLikesRequestParams extends IApiRequest {
    pageParam: {
        id: number;
        limit: number;
        page: number;
    };
}

export interface IGetArtLikesResponse extends IApiInfiniteResponse<IArtLike> {}

export interface IGetSavedArtsRequestParams extends IApiRequest {
    pageParam: {
        id: string;
        limit: number;
        page: number;
        offset?: number;
    };
}

export interface IGetSavedArtsResponse extends IApiInfiniteResponse<ISavedArt> {}

export interface ISaveArtRequestParams extends IApiRequest {
    id: number;
}

export interface IUnsaveArtRequestParams extends IApiRequest {
    id: number;
}
