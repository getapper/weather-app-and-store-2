import React, { memo } from "react";
import { useOrderRecapDialog } from "./index.hooks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";

type OrderRecapDialogProps = {};

export const OrderRecapDialog = memo(({}: OrderRecapDialogProps) => {
  const { isOpen, onClose, order } = useOrderRecapDialog();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h3">Dettagli ordine</Typography>
      </DialogTitle>
      <DialogContent>
        <Divider sx={{ mb: 3 }} />
        {order ? (
          <>
            <Typography fontWeight={700}>Ordine fatto da</Typography>
            <Typography>
              {order.nome.charAt(0).toUpperCase() + order.nome.slice(1)}{" "}
              {order.cognome.charAt(0).toUpperCase() + order.cognome.slice(1)}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography fontWeight={700}>Indirizzo consegna:</Typography>
            <Typography>
              {"via " +
                order.spedizione.via +
                ", " +
                order.spedizione.citta +
                " (" +
                order.spedizione.cap +
                "), " +
                order.spedizione.stato}
            </Typography>
            <Typography fontWeight={700}>Indirizzo fatturazione:</Typography>
            <Typography>
              {"via " +
                order.fatturazione.via +
                ", " +
                order.fatturazione.citta +
                " (" +
                order.fatturazione.cap +
                "), " +
                order.fatturazione.stato}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography fontWeight={700}>Dettagli carta</Typography>
            <Typography>{"numero carta " + order.numeroCarta + " "}</Typography>
            <Typography>{"cvv " + order.cvv + " "} </Typography>
            <Typography>
              {"in scadenza: " + moment(order.scadenza).format("MM/YYYY")}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={700}>Recap prodotti: </Typography>
            {order.cart.map((product, i) => {
              return (
                <Stack key={i}>
                  {product.label + " - " + product.price + "$"}
                </Stack>
              );
            })}
            <Stack direction="row" spacing={2}>
              <Typography fontWeight={700}>Totale:</Typography>
              <Typography>{" " + order.total + " $"}</Typography>
            </Stack>
          </>
        ) : (
          "nessun ordine effettuato"
        )}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
});
OrderRecapDialog.displayName = "OrderRecapDialog";
