import axios from "@/shared/config/axios";
import {
    ICreateArtistRequestParams,
    IFollowUserRequestParams,
    IGetArtistRequestParams,
    IGetArtistResponse,
    IGetArtistsRequestParams,
    IGetArtistsResponse,
    IGetFollowersRequestParams,
    IGetFollowersResponse,
    IGetFollowingArtistRequestParams,
    IGetFollowingArtistResponse,
    IGetFollowingRequestParams,
    IGetFollowingResponse,
    IGetNotificationsRequestParams,
    IGetNotificationsResponse,
    IGetUserProfileRequestParams,
    IGetUserProfileResponse,
    IRequestArtistRequestParams,
    ISeenNotificationsRequestParams,
    IUpdateSettingsRequestParams,
} from "./user.types";
import customFetch from "@/shared/config/fetch";

export const getUserProfile = async (params: IGetUserProfileRequestParams) => {
    const response = await customFetch<IGetUserProfileResponse>(`/user/get/${params.id}/`, {
        signal: params.signal,
        cache: "force-cache",
    });

    return response;
};

export const getArtistProfile = async (params: IGetArtistRequestParams) => {
    const response = await customFetch<IGetArtistResponse>(
        `/artist/${params.id}/`,
        {
            signal: params.signal,
        },
        params.cookies
    );

    return response;
};

export const getArtistsProfiles = async (params: IGetArtistsRequestParams) => {
    const response = await axios.get<IGetArtistsResponse>(`/artist/`, {
        params: { ...params.pageParam, token: undefined },
        signal: params.signal,
    });
    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const createArtist = async (params: ICreateArtistRequestParams) => {
    return await customFetch(`/artist/`, {
        method: "POST",
        body: JSON.stringify(params),
        signal: params.signal,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const followUser = async (params: IFollowUserRequestParams) => {
    return await axios.post(`/user/follow/${params.type}/${params.id}/`, null, { signal: params.signal });
};

export const getFollowers = async (params: IGetFollowersRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.page * limit - limit;

    const response = await axios.get<IGetFollowersResponse>(
        `/${params.pageParam.type}/${params.pageParam.id}/follower/`,
        { params: { limit, offset }, signal: params.signal }
    );

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const getFollowing = async (params: IGetFollowingRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.page * limit - limit;

    const response = await axios.get<IGetFollowingResponse>(
        `/${params.pageParam.type}/${params.pageParam.id}/following/`,
        { params: { limit, offset }, signal: params.signal }
    );

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const getFollowingArtist = async (params: IGetFollowingArtistRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.page * limit - limit;

    const response = await axios.get<IGetFollowingArtistResponse>(`/user/${params.pageParam.id}/following/artists/`, {
        params: { limit, offset },
        signal: params.signal,
    });

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const getNotifications = async (params: IGetNotificationsRequestParams) => {
    const limit = params.pageParam.limit;
    const offset = params.pageParam.page * limit - limit;

    const response = await axios.get<IGetNotificationsResponse>("/user/notification/", {
        params: { limit, offset },
        signal: params.signal,
    });

    return {
        count: response.data.count,
        next: response.data.next,
        items: response.data.results,
    };
};

export const checkNotifications = async () => {
    const response = await getNotifications({ pageParam: { limit: 1, page: 1 } });
    if (response.items.length !== 0) return !response.items[0].is_read;
    return false;
};

export const seenNotifications = async (params: ISeenNotificationsRequestParams) => {
    await axios.post(`/user/notification/${params.id}/`, null, { signal: params.signal });
};

export const updateSettings = async (params: IUpdateSettingsRequestParams) => {
    const formData = new FormData();

    const paramsNames = Object.keys(params);

    paramsNames.forEach((param: any) => {
        formData.append(param, (params as any)[param]);
    });

    formData.delete("signal");

    await axios.patch("/auth/users/me/", formData, {
        signal: params.signal,
        headers: { "Content-Type": "multipart/form-data" },
    });
};

export const requestArtist = async (params: IRequestArtistRequestParams) => {
    await axios.post(`/requestartist/`, { ...params, signal: undefined }, { signal: params.signal });
};
