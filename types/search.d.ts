export {};

declare global {
    type TSearchQueryParams = {
        q: string | null;
        orderBy: "asc" | "des";
        type: "art" | "user" | "artist";
    };

    type TSearchArtQueryParams = TSearchQueryParams & {
        searchBy: "artist__name" | "title" | "date" | "technique" | "form" | "school" | "type" | "location";
        sortBy: "most_viewed" | "most_reposted" | "most_liked";
    };

    type TSearchArtistQueryParams = TSearchQueryParams & {
        searchBy: "name" | "birth_date" | "profession" | "school";
        sortBy: "most_viewed" | "most_followed";
    };

    // type TSearchUserQueryParams = TSearchQueryParams & {
    //     searchBy: "name" | "birth_date" | "profession" | "school";
    //     orderType: "name" | "birth_date" | "profession" | "school" | "most_viewed" | "most_followed";
    // };
}
