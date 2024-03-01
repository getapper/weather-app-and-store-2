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
  const { formData, submitDisabled, handleCheckout, isOpen, onClose, errors } =
    useCheckoutDialogForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={handleCheckout}>
        <Dialog open={isOpen} onClose={onClose}>
          <DialogTitle>Effettua il checkout</DialogTitle>
          <DialogContent>
            <Stack spacing={2} py={2} px={4}>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCheckout} disabled={submitDisabled}>
              CHECKOUT
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </FormProvider>
  );
});
CheckoutDialogForm.displayName = "CheckoutDialogForm";
