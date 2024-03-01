import { RootState } from "@/spas/store-app/redux-store";

export const getOrdersList = (state: RootState) => state?.orders?.list;

export const getCurrentOrder = (state: RootState) =>
  state?.orders?.currentOrder;
