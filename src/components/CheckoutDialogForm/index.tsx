import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useCheckoutDialogForm } from "./index.hooks";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { FormTextField } from "../_form/FormTextField";
import { FormDatePicker } from "../_form/FormDatePicker";
import { FormAddress } from "../_form/FormAddress";

type CheckoutDialogFormProps = {};

export const CheckoutDialogForm = memo(({}: CheckoutDialogFormProps) => {
  const {
    formData,
    submitDisabled,
    handleCheckout,
    isOpen,
    onClose,
    errors,
    cartTotal,
    cart,
  } = useCheckoutDialogForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={handleCheckout}>
        <Dialog open={isOpen} onClose={onClose} fullWidth>
          <DialogTitle variant="h3">Effettua il checkout</DialogTitle>
          <DialogContent sx={{ p: 5 }}>
            <Stack spacing={2}>
              <FormAddress
                name="spedizione"
                label="Indirizzo di spedizione"
                errors={errors?.spedizione}
              />
              <FormAddress
                name="fatturazione"
                label="Indirizzo di fatturazione"
                errors={errors?.fatturazione}
              />
              <Divider />
              <Typography>Dati carta</Typography>
              <FormTextField name="nome" label="Nome" />
              <FormTextField name="cognome" label="Cognome" />
              <FormTextField
                name="numeroCarta"
                label="Numero carta"
                placeholder="numero carta..."
              />
              <FormDatePicker name="scadenza" label="Data di scadenza" />
              <FormTextField name="cvv" label="CVV" placeholder="CVV" />
            </Stack>
            <Stack spacing={2} mt={3}>
              <Divider />
              <Typography>Recap ordine:</Typography>
              <ul>
                {cart.map((product, i) => {
                  return (
                    <li key={i} style={{ marginLeft: 40 }}>
                      <Typography>
                        {product.label} - {product.price}$
                      </Typography>
                    </li>
                  );
                })}
              </ul>
              <Divider />
              <Stack direction={"row"} spacing={2}>
                <Typography fontWeight={600}>{"Totale:"}</Typography>
                <Typography>{cartTotal} $</Typography>
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ mr: 2 }}
              onClick={handleCheckout}
              disabled={submitDisabled}
              variant="contained"
            >
              CHECKOUT
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </FormProvider>
  );
});
CheckoutDialogForm.displayName = "CheckoutDialogForm";
