import React, { memo } from "react";
import { useOrderRecapDialog } from "./index.hooks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

type OrderRecapDialogProps = {};

export const OrderRecapDialog = memo(({}: OrderRecapDialogProps) => {
  const { isOpen, onClose, order } = useOrderRecapDialog();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Dettagli ordine</DialogTitle>
      <DialogContent>{order?.total ?? "nessun ordine"}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
});
OrderRecapDialog.displayName = "OrderRecapDialog";
