import React, { memo } from "react";
import { useFormAddress } from "./index.hooks";
import { FormTextField } from "../FormTextField";
import { TextField, TextFieldProps, Typography } from "@mui/material";

type FormAddressProps = {
  label: string;
  name: string;
  errors?;
} & TextFieldProps;

export const FormAddress = memo(
  ({ label, name, helperText, errors }: FormAddressProps) => {
    const { value, handleChange, error } = useFormAddress(name);

    console.log(errors);
    return (
      <>
        <Typography>{label}</Typography>
        <TextField
          label="via"
          value={value?.via}
          onChange={(ev) => handleChange(ev, "via")}
          error={errors && !!errors.via}
          helperText={errors && !!errors.via ? "Dato invalido" : ""}
        />
        <TextField
          label="città"
          value={value?.citta}
          onChange={(ev) => handleChange(ev, "citta")}
          error={errors && !!errors.citta}
          helperText={errors && !!errors.citta ? "Dato invalido" : ""}
        />
        <TextField
          label="stato"
          value={value?.stato}
          onChange={(ev) => handleChange(ev, "stato")}
          error={errors && !!errors.stato}
          helperText={errors && !!errors.stato ? "Dato invalido" : ""}
        />
        <TextField
          label="CAP"
          value={value?.cap}
          onChange={(ev) => handleChange(ev, "cap")}
          error={errors && !!errors.cap}
          helperText={errors && !!errors.cap ? "Dato invalido" : ""}
        />
        {/* <FormTextField placeholder="via" name="via" />
      <FormTextField placeholder="città" name="citta" />
      <FormTextField placeholder="stato" name="stato" />
      <FormTextField placeholder="CAP" name="cap" /> */}
      </>
    );
  },
);
FormAddress.displayName = "FormAddress";
