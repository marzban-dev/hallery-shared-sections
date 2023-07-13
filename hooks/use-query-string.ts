import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useQueryString = <T extends Record<any, any>>(queries: T, deleteWhenUndefined?: boolean) => {
    const searchParams = useSearchParams();

    const extractQueries = (): T => {
        const queryObject: any = {};

        /**
         * iterate over queries argument and extract query strings from url one by one using next router
         * if query does not exist in url then use default value provided in queries object
         * if deleteWhenUndefined is true, do not put default value for that query and keep it empty
         * after all, store them into queryObject
         */
        Object.keys(queries).map((query) => {
            if (searchParams.has(query)) {
                queryObject[query] = String(searchParams.get(query));
            } else {
                if (!deleteWhenUndefined) {
                    queryObject[query] = queries[query];
                }
            }
        });

        return queryObject;
    };

    return useMemo(extractQueries, [searchParams]);
};

export default useQueryString;
