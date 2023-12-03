import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useQueryString = <T>() => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const urlSearchParams = new URLSearchParams(searchParams?.toString());

    const updateQueryParams = (params: Partial<T>) => {
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                urlSearchParams.delete(key);
            } else {
                urlSearchParams.set(key, String(value));
            }
        });

        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : "";
        // replace since we don't want to build a history
        return `${pathname}${query}`;
    };

    return { queryParams: searchParams, updateQueryParams };
};

export default useQueryString;
