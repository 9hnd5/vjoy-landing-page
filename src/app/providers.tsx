"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  brandCyan: {
    600: "#029ED8",
    500: "#03CBFC",
    100: "#CCFEF9",
  },
  brandGray: {
    900: "#101828",
    500: "#667085",
    100: "#F2F4F7",
    50: "#F9FAFB",
  },
  brandGreen: {
    600: "#3CC155",
    500: "#A0F698",
    100: "#E6FDDD",
  },
  brandOrange: {
    600: "#FC7006",
    500: "#FF860D",
    400: "#FFA334",
    100: "#FFF1D3",
  },
  brandPink: {
    600: "#D85E85",
    400: "#FDA0AC",
    100: "#FFDCE4",
  },
  brandPurple: {
    700: "#641DEC",
    600: "#6D27FF",
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
