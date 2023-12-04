import axiosModule from "axios";
import createAuthHeader from "shared/utils/create-auth-header";

export const BASE_URL = "https://api.hallery.art";

const axios = axiosModule.create({
    baseURL: BASE_URL,
});

axios.interceptors.request.use(async (config) => {
    const url = config.url;

    if (!url!.includes("auth/signin") || !url!.includes("auth/signup")) {
        const authHeader = await createAuthHeader();
        config.headers!.Authorization = authHeader.Authorization;
        return config;
    }

    return config;
});

export default axios;
