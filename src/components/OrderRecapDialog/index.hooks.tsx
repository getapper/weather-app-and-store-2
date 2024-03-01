import { IOrder } from "@/models/client/Order";
import { selectors, actions } from "@/spas/store-app/redux-store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useOrderRecapDialog = () => {
  const dispatch = useDispatch();
  const order: IOrder = useSelector(selectors.getCurrentOrder);
  const isOpen = useSelector(selectors.getIsOrderRecapDialogOpen);
  const onClose = useCallback(() => {
    dispatch(actions.setOrderRecapDialogIsOpen(false));
  }, [dispatch]);

  return { isOpen, onClose, order };
};
