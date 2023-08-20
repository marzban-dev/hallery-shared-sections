"use client";

import { QueryClient, QueryClientProvider as QueryProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    return (
        <QueryProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
    );
};

export default QueryClientProvider;
