import React, { memo } from "react";
import { useFormAddress } from "./index.hooks";
import { FormTextField } from "../FormTextField";
import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";

type FormAddressProps = {
  label: string;
  name: string;
  errors?;
} & TextFieldProps;

export const FormAddress = memo(
  ({ label, name, helperText, errors }: FormAddressProps) => {
    const { value, handleChange, error } = useFormAddress(name);

    return (
      <Stack spacing={1}>
        <Typography>{label}</Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            sx={{ width: "50%" }}
            label="Via"
            value={value?.via}
            onChange={(ev) => handleChange(ev, "via")}
            error={errors && !!errors.via}
            helperText={errors && !!errors.via ? "Dato invalido" : ""}
          />
          <TextField
            sx={{ width: "50%" }}
            label="Città"
            value={value?.citta}
            onChange={(ev) => handleChange(ev, "citta")}
            error={errors && !!errors.citta}
            helperText={errors && !!errors.citta ? "Dato invalido" : ""}
          />
        </Stack>
        <TextField
          label="Stato"
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
      </Stack>
    );
  },
);
FormAddress.displayName = "FormAddress";
