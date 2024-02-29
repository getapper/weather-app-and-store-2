import { RootState } from "@/spas/store-app/redux-store";

export const getCurrentProduct = (state: RootState) =>
  state?.product?.currentElem;
