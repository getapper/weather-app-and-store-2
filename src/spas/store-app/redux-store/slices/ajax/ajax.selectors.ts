import { RootState } from "@/spas/store-app/redux-store";

export const getAjaxIsLoadingByApi = (api: string) => (state: RootState) =>
  state?.ajax?.isLoading[api];
