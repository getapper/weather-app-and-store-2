import { actions, selectors } from "@/spas/store-app/redux-store";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useHeader = () => {
  const [isOpen, toggleDrawer] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(selectors.getCartItems);
  const total = cart.reduce((accum, elem) => (accum += elem.price), 0);
  const handleDeleteFromCart = useCallback(
    (index) => {
      dispatch(actions.removeItemFromCart(index));
    },
    [dispatch],
  );

  return { isOpen, toggleDrawer, cart, total, handleDeleteFromCart };
};
