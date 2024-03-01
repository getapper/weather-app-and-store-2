import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useCallback } from "react";

export const useProductDetailsScene = () => {
  const product = useSelector(selectors.getCurrentProduct);
  const dispatch = useDispatch();
  const handleAddToCart = useCallback(() => {
    window.alert("Prodotto aggiunto al carrello");
    dispatch(actions.addItemToCart(product));
  }, [dispatch, product]);
  return { product, handleAddToCart };
};
