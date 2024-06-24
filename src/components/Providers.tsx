"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import { useState } from "react";
import ReduxProvider from "@/redux/ReduxProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </QueryClientProvider>
    );
};

export default Providers;
