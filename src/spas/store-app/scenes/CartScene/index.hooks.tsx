import { useSelector } from "react-redux";
import { selectors } from "../../redux-store";

export const useCartScene = () => {
  const products = useSelector(selectors.getCartItems);
  return { products };
};
