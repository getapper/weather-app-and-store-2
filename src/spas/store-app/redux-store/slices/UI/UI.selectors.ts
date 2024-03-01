import { RootState } from "@/spas/store-app/redux-store";

export const getUi = (state: RootState) => state?.UI;
export const getIsDialogOpen = (state: RootState) => state?.UI?.isDialogOpen;
