import React, { memo } from "react";
import { useHeader } from "./index.hooks";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import { NavButton } from "../NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Product from "../Product";

type HeaderProps = {};

export const Header = memo(({}: HeaderProps) => {
  const { isOpen, toggleDrawer, cart: products, total } = useHeader();
  console.log(products);
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "lightblue",
        boxShadow: 2,
        position: "sticky",
      }}
    >
      <Typography variant="h1">my shop</Typography>
      <Stack spacing={2} p={2}>
        <NavButton label="" />
        <Button
          variant="contained"
          sx={{ p: 2 }}
          onClick={() => toggleDrawer(true)}
        >
          <ShoppingCartIcon />
        </Button>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => toggleDrawer(false)}
          sx={{ boxShadow: 2, mx: 20, position: "relative" }}
        >
          <Stack spacing={1} sx={{ mx: 10, my: 1 }}>
            <NavButton
              path="/cart"
              label="Vai al carrello"
              icon={<ShoppingCartIcon />}
            />
            {products?.map((product, i) => (
              <Product
                src={product.src}
                label={product.label}
                price={product.price}
                key={i}
                heigth={250}
              />
            ))}
            <Typography variant="h4" sx={{ my: 2, mx: 4 }}>
              {"Totale: " + total + " $"}
            </Typography>
          </Stack>
        </Drawer>
      </Stack>
    </Stack>
  );
});
Header.displayName = "Header";
