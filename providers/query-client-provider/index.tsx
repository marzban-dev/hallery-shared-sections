"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientOptions, PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import React, { useEffect, useState } from "react";

const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [persisterStorage, setPersisterStorage] = useState<Storage | undefined>(undefined);

    useEffect(() => {
        setPersisterStorage(window.localStorage);
    }, []);

    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    cacheTime: 1000 * 60 * 60 * 24,
                },
            },
        })
    );

    const persister = createSyncStoragePersister({ storage: persisterStorage });

    const persistQueries: string[] = ["explore"];

    const persistOptions: Omit<PersistQueryClientOptions, "queryClient"> = {
        persister,
        maxAge: 1000 * 60 * 60 * 24,
        hydrateOptions: undefined,
        dehydrateOptions: {
            shouldDehydrateQuery: ({ queryKey }) => {
                return persistQueries.includes(queryKey[0] as string);
            },
        },
    };

    return persisterStorage ? (
        <PersistQueryClientProvider client={client} persistOptions={persistOptions}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
    ) : null;
};

export default QueryClientProvider;
