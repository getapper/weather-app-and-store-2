import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useCallback } from "react";

export const useCartScene = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.getCartItems);
  const showCheckoutDialog = useCallback(() => {
    dispatch(actions.setCheckoutDialogIsOpen(true));
  }, [dispatch]);
  const showOrderRecapDialog = useCallback(() => {
    dispatch(actions.setOrderRecapDialogIsOpen(true));
  }, [dispatch]);
  return { products, showCheckoutDialog, showOrderRecapDialog };
};
