import { createCommonStore } from "../stores/common.store";

export const useAuthCheckStore = (() => {
  const store = createCommonStore<boolean>();

  let initialized = false;

  const init = (isAuthenticatedFn: () => boolean) => {
    if (!initialized) {
      initialized = true;

      store.getState().fetchData(async () => {
        await new Promise((r) => setTimeout(r, 1200));
        return isAuthenticatedFn();
      });
    }
  };

  return Object.assign(store, { init });
})();
