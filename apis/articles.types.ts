type TOrdering = "title" | "description";

export interface IGetArticleRequestParams extends IApiRequest {
    pageParam: {
        title__icontains?: string;
        description__icontains?: string;
        ordering?: TOrdering | `-${TOrdering}`;
        limit?: number;
        offset?: number;
    };
}

export interface IGetArticleResponse extends IArticle {}

export interface IGetArticlesRequestParams extends IApiRequest {
    pageParam: {
        owner?: string;
        owner__username?: string;
        art?: TOrdering | `-${TOrdering}`;
        title__icontains?: number;
        categories__contains?: number;
        tags__contains?: number;
        published: string;
        ordering: string;
        limit: string;
        offset: string;
    };
}

export interface IGetArticlesResponse extends IApiInfiniteResponse<IArticle> {}

export interface IGetCategoriesRequestParams extends IApiRequest {}

export interface IGetCategoriesResponse {
    categories: string[];
}

export interface IGetTagsRequestParams extends IApiRequest {}

export interface IGetTagsResponse {
    tags: string[];
}