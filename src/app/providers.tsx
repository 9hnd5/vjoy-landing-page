"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createStandaloneToast } from "@chakra-ui/react";

const { ToastContainer, toast } = createStandaloneToast();

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(error, variables, context) {
        if (error instanceof Error)
          toast({
            title: "Error",
            description: error.message,
            status: "error",
            position: "top-right",
            duration: 5000,
            isClosable: true,
          });
      },
      onSuccess(data, variables, context) {
        toast({
          title: "Success",
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      },
    },
  },
});

const colors = {
  nav: {
    color: "",
    activeColor: "white",
    activeBackground: "#ba141a",
  },
};

export const theme = extendTheme({ colors });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
          <ToastContainer />
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
