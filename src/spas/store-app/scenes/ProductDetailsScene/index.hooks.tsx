import { useSelector } from "react-redux";
import { selectors } from "../../redux-store";

export const useProductDetailsScene = () => {
  const product = useSelector(selectors.getCurrentProduct);

  return { product };
};
