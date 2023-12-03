export {};

declare global {
    type NextPageParams<T extends Record<string, string | undefined>> = {
        params: T;
        searchParams: { [key: string]: string | undefined };
    };

    type TArtistProfileQueryParams = {
        sortBy: "most_liked" | "most_reposted" | "most_viewed";
        orderBy: "asc" | "des";
    };

    type TArticlesQueryParams = {
        search: string | null;
        searchBy: "title" | "categories" | "tags";
        orderType: "title" | "description" | "created" | "published";
        orderBy: "asc" | "des";
    };

    type THistory = {
        id: number;
        text: string;
    }    
}
