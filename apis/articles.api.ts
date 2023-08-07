import axios from "shared/config/axios";
import {
    IGetArticlesRequestParams,
    IGetArticlesResponse,
    IGetCategoriesRequestParams,
    IGetTagsRequestParams,
} from "./articles.types";

// export const getArticle = async (params: IGetArticleRequestParams) => {
//     const response = await axios.get<IGetArticleResponse>("/", {
//         params: { ...params.pageParam, token: undefined },
//         signal: params.signal,
//     });

//     return {
//         items: response.data.results,
//         next: response.data.next,
//         count: response.data.count,
//     };
// };

export const getCategories = async (params: IGetCategoriesRequestParams) => {
    const response = [
        { id: 1, title: "Painting" },
        { id: 2, title: "Ceramic" },
        { id: 3, title: "Sculpture" },
        { id: 4, title: "Category-1" },
        { id: 5, title: "Category-2" },
        { id: 6, title: "Category-3" },
        { id: 7, title: "Category-4" },
        { id: 8, title: "Category-5" },
        { id: 9, title: "Category-6" },
        { id: 10, title: "Category-7" },
        { id: 11, title: "Category-8" },
        { id: 12, title: "Category9" },
    ];

    return response;
};

export const getTags = async (params: IGetTagsRequestParams) => {
    const response = [
        { id: 1, title: "Painting" },
        { id: 2, title: "Ceramic" },
        { id: 3, title: "Sculpture" },
        { id: 4, title: "tag-1" },
        { id: 5, title: "tag-2" },
        { id: 6, title: "tag-3" },
        { id: 7, title: "tag-4" },
        { id: 8, title: "tag-5" },
        { id: 9, title: "tag-6" },
        { id: 10, title: "tag-7" },
        { id: 11, title: "tag-8" },
    ];

    return response;
};

export const getArticles = async (params: IGetArticlesRequestParams) => {
    const response = await axios.get<IGetArticlesResponse>("/", {
        params: { ...params.pageParam, token: undefined },
        signal: params.signal,
    });

    return {
        items: response.data.results,
        next: response.data.next,
        count: response.data.count,
    };
};
