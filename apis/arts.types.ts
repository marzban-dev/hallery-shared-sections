/**
 * Apis request, response types
 */

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
        dimension__icontains?: string;
        created_at__gte?: string;
        created_at__lte?: string;
        created_at?: string;
        ordering?: string;
        limit?: number;
        offset?: number;
    };
}

export interface IGetArtsResponse extends IApiInfiniteResponse<IArt> {}

export interface IGetArtRequestParams extends IApiRequest {
    id: number;
}

export interface IGetChartDataRequestParams extends IApiRequest {}

export interface IGetChartSavedArtsResponse extends IApiInfiniteResponse<ISavedArt> {}

export interface IGetChartLikesResponse extends IApiInfiniteResponse<IArtLike> {}

export interface ICreateArtRequestParams extends IApiRequest {
    data: ICreateArt;
}

export interface IUpdateArtRequestParams extends IApiRequest {
    id: number;
    data: Omit<ICreateArt, "image">;
}

export interface IDeleteArtRequestParams extends IApiRequest {
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
