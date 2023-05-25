import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";

export const useAppQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "initialData"
  > & { initialData?: () => undefined }
): UseQueryResult<TData, TError> => {
  return useQuery(options);
};
