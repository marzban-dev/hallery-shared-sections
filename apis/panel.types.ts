export interface IGetArtsResponse extends IApiInfiniteResponse<IArt> {}

export interface IGetArtRequestParams extends IApiRequest {
    id: number;
}