import { RootState } from "@/spas/store-app/redux-store";

export const getUi = (state: RootState) => state?.UI;
export const getIsCheckoutDialogOpen = (state: RootState) =>
  state?.UI?.isCheckoutDialogOpen;
export const getIsOrderRecapDialogOpen = (state: RootState) =>
  state?.UI?.isOrderRecapDialogOpen;
