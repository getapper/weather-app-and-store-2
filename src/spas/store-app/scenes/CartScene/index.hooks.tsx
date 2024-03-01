import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useCallback } from "react";

export const useCartScene = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.getCartItems);
  const showDialog = useCallback(() => {
    dispatch(actions.setDialogIsOpen(true));
  }, [dispatch]);
  return { products, showDialog };
};
