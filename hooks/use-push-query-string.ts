import { usePathname, useRouter, useSearchParams } from "next/navigation";

const usePushQueryString = () => {
    const { push } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pushQuery = (queries: Record<any, any>) => {
        const oldQueries: any = {};

        for (let [key, value] of searchParams.entries()) {
            oldQueries[key] = value;
        }

        const params = new URLSearchParams({ ...oldQueries, ...queries });

        Object.keys(queries).forEach((query) => {
            if (!queries[query]) params.delete(query);
        });

        push(pathname + "?" + params.toString());
    };

    return pushQuery;
};

export default usePushQueryString;
