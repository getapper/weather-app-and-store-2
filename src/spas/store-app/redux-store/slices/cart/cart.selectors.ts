import { RootState } from "@/spas/store-app/redux-store";

export const getCartItems = (state: RootState) => state?.cart?.items;
