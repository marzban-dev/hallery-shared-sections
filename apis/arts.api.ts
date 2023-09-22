import axios from "shared/config/axios";
import customFetch from "shared/config/fetch";
import {
    ICreateArtRequestParams,
    IDeleteArtRequestParams,
    IGetArtLikesRequestParams,
    IGetArtLikesResponse,
    IGetArtRequestParams,
    IGetArtResponse,
    IGetArtsRequestParams,
    IGetArtsResponse,
    IGetSavedArtsRequestParams,
    IGetSavedArtsResponse,
    ILikeArtRequestParams,
    ISaveArtRequestParams,
    IUnlikeArtRequestParams,
    IUnsaveArtRequestParams,
    IUpdateArtRequestParams,
} from "./arts.types";

export const getArt = async (params: IGetArtRequestParams) => {
    const response = await customFetch<IGetArtResponse>(`/art/${params.id}/`, {
        signal: params.signal,
    });

    return response;
};

export const createArt = async (params: ICreateArtRequestParams) => {
    const formData = new FormData();

    Object.keys(params.data).forEach((param) => {
        formData.append(param, (params.data as any)[param]);
    });

    await customFetch(`/art/`, {
        method: "POST",
        body: formData,
        signal: params.signal,
    });
};

export const updateArt = async (params: IUpdateArtRequestParams) => {
    await customFetch(`/art/${params.id}/`, {
        method: "PATCH",
        body: JSON.stringify(params.data),
        signal: params.signal,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const deleteArt = async (params: IDeleteArtRequestParams) => {
    await customFetch(`/art/${params.id}/`, {
        method: "DELETE",
        signal: params.signal,
    });
};

export const getArts = async (params: IGetArtsRequestParams) => {
    const response = await customFetch<IGetArtsResponse>(
        "/art/",
        {
            params: params.pageParam,
            signal: params.signal,
            cache: "no-cache",
        },
        params.cookies
    );

    return {
        items: response.results,
        next: response.next,
        count: response.count,
    };
};

export const getArtLikes = async (params: IGetArtLikesRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.page * limit - limit;

    const response = await axios.get<IGetArtLikesResponse>(`/art/like/`, {
        params: { art: params.pageParam.id, limit, offset },
        signal: params.signal,
    });

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const likeArt = async (params: ILikeArtRequestParams) => {
    await axios.post("/art/like/", { art: params.id }, { signal: params.signal });
};

export const unlikeArt = async (params: IUnlikeArtRequestParams) => {
    await axios.delete(`/art/like/${params.id}/`, { signal: params.signal });
};

export const getSavedArts = async (params: IGetSavedArtsRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.offset ?? params.pageParam.page * limit - limit;

    const response = await axios.get<IGetSavedArtsResponse>("/repost/", {
        params: { owner__username: params.pageParam.id, ordering: "-created_date", limit, offset },
        signal: params.signal,
    });

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const saveArt = async (params: ISaveArtRequestParams) => {
    await axios.post("/repost/", { art: params.id }, { signal: params.signal });
};

export const unsaveArt = async (params: IUnsaveArtRequestParams) => {
    await axios.delete(`/repost/${params.id}/`, { signal: params.signal });
};
