import { useToast } from "@chakra-ui/react";
import {
  useMutation,
  QueryClient,
  UseMutationOptions,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";

export type Options = {
  showSuccessNotify?: boolean;
  showErrorNotify?: boolean;
  invalidate?: (queryClient: QueryClient) => any;
};

export const useAppMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options?: Options & UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const {
    showSuccessNotify = true,
    showErrorNotify = true,
    invalidate,
    onSuccess,
    onError,
    ...rest
  } = options || {};

  const toast = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    ...rest,
    onSuccess(data, variables, context) {
      showSuccessNotify &&
        toast({
          title: "Success",
          duration: 5000,
          position: "top-right",
          status: "success",
          isClosable: true,
        });

      onSuccess && onSuccess(data, variables, context);

      invalidate && invalidate(queryClient);
    },
    onError(error, variables, context) {
      showErrorNotify &&
        toast({
          title: "Error",
          description:
            error instanceof Error ? error.message : "Something went wrong",
          duration: 5000,
          position: "top-right",
          status: "error",
          isClosable: true,
        });

      onError && onError(error, variables, context);
    },
  });
};
