import { useErrorStore } from "@/shared/stores/error.store";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { CustomAxiosAppError } from "../axios/types";
import { environtment } from "@/config/environtment";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: environtment.staleTime,
      retry: environtment.retry,
      gcTime: environtment.gcTime,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      useErrorStore.getState().setError(new CustomAxiosAppError(error as AxiosError));
    },
  }),
});
