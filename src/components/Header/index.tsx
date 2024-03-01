import React, { memo } from "react";
import { useHeader } from "./index.hooks";
import { Stack, Typography } from "@mui/material";
import { NavButton } from "../NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type HeaderProps = {};

export const Header = memo(({}: HeaderProps) => {
  const {} = useHeader();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "lightblue",
      }}
      boxShadow={2}
    >
      <Typography variant="h1">my shop</Typography>
      <Stack spacing={2} p={2}>
        <NavButton />
        <NavButton
          path="/cart"
          label="Vai al carrello"
          icon={<ShoppingCartIcon />}
        />
      </Stack>
    </Stack>
  );
});
Header.displayName = "Header";
