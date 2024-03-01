import { selectors } from "@/spas/store-app/redux-store";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useHeader = () => {
  const [isOpen, toggleDrawer] = useState(false);
  const cart = useSelector(selectors.getCartItems);
  const total = cart.reduce((accum, elem) => (accum += elem.price), 0);

  return { isOpen, toggleDrawer, cart, total };
};
