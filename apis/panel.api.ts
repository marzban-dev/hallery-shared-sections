import customFetch from "@/shared/config/fetch";
import { IGetChartDataRequestParams, IGetChartLikesResponse, IGetChartSavedArtsResponse } from "./arts.types";

export const getChartData = async (params: IGetChartDataRequestParams) => {
    const currentDate = new Date();
    const lastMonthDate = new Date(new Date().setDate(new Date().getDate() - 10));

    const repostsResponse = await customFetch<IGetChartSavedArtsResponse>(
        `/repost/`,
        {
            // params: { created_date__gte: lastMonthDate.toString(), created_date__lte: currentDate.toString() },
            params: { limit: 20 },
            signal: params.signal,
        },
        params.cookies
    );

    const likesResponse = await customFetch<IGetChartLikesResponse>(
        `/art/like/`,
        {
            // params: { created_date__gte: lastMonthDate.toString(), created_date__lte: currentDate.toString() },
            params: { limit: 20 },
            signal: params.signal,
        },
        params.cookies
    );

    return {
        likes: likesResponse.results,
        reposts: repostsResponse.results,
    };
};
