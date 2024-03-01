import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { useCallback } from "react";

export const useProductDetailsScene = () => {
  const product = useSelector(selectors.getCurrentProduct);
  const dispatch = useDispatch();
  const handleAddToCart = useCallback(() => {
    dispatch(actions.addItemToCart(product));

    dispatch(
      actions.setFeedback({
        type: "success",
        message: "Prodotto aggiunto al carrello",
      }),
    );
  }, [dispatch, product]);
  return { product, handleAddToCart };
};
