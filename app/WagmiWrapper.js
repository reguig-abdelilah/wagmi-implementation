'use client';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { WagmiConfig } from "./config/WagmiConfig";

const client = new QueryClient()
export const WagmiWrapper = ( { children } )=>{
    return(
    <WagmiProvider config={WagmiConfig} >
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    </WagmiProvider>

    )
}