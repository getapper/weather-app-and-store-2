import { selectors, actions } from "@/spas/store-app/redux-store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useOrderRecapDialog = () => {
  const dispatch = useDispatch();
  const order = useSelector(selectors.getCurrentOrder);
  const isOpen = useSelector(selectors.getIsOrderRecapDialogOpen);
  const onClose = useCallback(() => {
    dispatch(actions.setOrderRecapDialogIsOpen(false));
  }, [dispatch]);

  console.log(order);
  return { isOpen, onClose, order };
};
