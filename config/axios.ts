import axiosModule from "axios";
import createAuthHeader from "@/shared/utils/create-auth-header";

const axios = axiosModule.create({
    baseURL: "https://api.hallery.art",
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
