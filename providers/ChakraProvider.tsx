"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as CP } from "@chakra-ui/react";

export function ChakraProvider({
    children
}: {
    children: React.ReactNode
}){
    return (
        <CacheProvider>
            <CP resetCSS={false}>
                {children}
            </CP>
        </CacheProvider>
    )
}