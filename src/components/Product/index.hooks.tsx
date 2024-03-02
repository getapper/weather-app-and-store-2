import { actions } from "@/spas/store-app/redux-store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const dispatch = useDispatch();

  const showCheckoutDialog = useCallback(() => {
    dispatch(actions.setCheckoutDialogIsOpen(true));
  }, [dispatch]);

  return { showCheckoutDialog };
};
