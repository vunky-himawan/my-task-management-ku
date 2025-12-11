import { create } from "zustand";

interface CommonState<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;

  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setData: (data: T | null) => void;
  reset: () => void;
  fetchData: (fn: () => Promise<T>) => Promise<void>;
}

export const createCommonStore = <T,>() =>
  create<CommonState<T>>((set) => ({
    isLoading: false,
    error: null,
    data: null,

    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error, isLoading: false }),
    setData: (data) => set({ data, isLoading: false, error: null }),
    reset: () => set({ isLoading: false, error: null, data: null }),

    fetchData: async (fn) => {
      set({ isLoading: true, error: null });
      try {
        const data = await fn();
        set({ data, isLoading: false, error: null });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An error occurred";
        set({ error: errorMessage, isLoading: false });
      }
    },
  }));

export const selectIsLoading = <T,>(state: CommonState<T>) => state.isLoading;
export const selectError = <T,>(state: CommonState<T>) => state.error;
export const selectData = <T,>(state: CommonState<T>) => state.data;
