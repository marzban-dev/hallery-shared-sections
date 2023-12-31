import { useQuery } from "@tanstack/react-query";
import { getArt } from "shared/apis/arts.api";

export const useArtQuery = (id: number) => {
    return useQuery(["art", id], ({ signal }) => getArt({ id, signal }));
};
