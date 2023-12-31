import createAuthHeader from "@/shared/utils/create-auth-header";
import removeUndefined from "@/shared/utils/remove-undefined";

const customFetch = async <T>(
    input: string,
    init?: ({ params?: Record<any, any> } & RequestInit) | undefined,
    cookies?: any
): Promise<T> => {
    const baseURL = "https://api.hallery.art";

    removeUndefined(init?.headers);

    let token: string | undefined = "";

    let headers: any = {...init?.headers};

    if (!input.includes("auth/signin") && !input.includes("auth/signup")) {
        const authHeader = (await createAuthHeader(cookies)) as object;
        headers = {...headers, ...authHeader};
    }

    removeUndefined(init?.params);

    const url = `${baseURL + input}?${new URLSearchParams(init?.params)}`;

    const response = await fetch(url, {
        ...{...init, params: undefined},
        headers,
    });

    if (response.status >= 400) {
        console.log("redirect to auth page.....................");
        const body = await response.json();
        throw new Error(`${response.status} : ${body.code}\nUrl : ${url}`);
    }

    if (init?.method === "DELETE") {
        return null as T;
    }

    return (await response.json()) as T;
};

export default customFetch;
