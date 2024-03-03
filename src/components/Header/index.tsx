import React, { memo } from "react";
import { useHeader } from "./index.hooks";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import { NavButton } from "../NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Product from "../Product";

type HeaderProps = {};

export const Header = memo(({}: HeaderProps) => {
  const {
    isOpen,
    toggleDrawer,
    cart: products,
    total,
    handleDeleteFromCart,
  } = useHeader();

  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: 2,
          position: "sticky",
        }}
      >
        <Typography variant="h1" ml={4}>
          my shop
        </Typography>
        <Stack spacing={2} p={2}>
          <NavButton label="" />
          <Button
            color="secondary"
            sx={{ p: 3, borderRadius: 999 }}
            onClick={() => toggleDrawer(true)}
            variant="contained"
          >
            <ShoppingCartIcon color="primary" />
          </Button>
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={() => toggleDrawer(false)}
            sx={{ boxShadow: 2, mx: 20, position: "relative" }}
          >
            <Stack sx={{ mx: 10, my: 1 }}>
              <Button onClick={() => toggleDrawer(false)}>
                <NavButton
                  path="/cart"
                  label="Vai al carrello"
                  icon={<ShoppingCartIcon />}
                />
              </Button>
              {/* TODO: qui sarebbe carino fare una List con gli avatar con foto prodotto https://mui.com/material-ui/react-list/ */}
              {products?.map((product, i) => (
                <Product
                  src={product.src}
                  label={product.label}
                  price={product.price}
                  key={i}
                  heigth={300}
                  handleDeleteFromCart={() => handleDeleteFromCart(i)}
                />
              ))}
              <Typography variant="h4" sx={{ my: 2, mx: 4 }}>
                {"Totale: " + total + " $"}
              </Typography>
            </Stack>
          </Drawer>
        </Stack>
      </Stack>
    </Box>
  );
});
Header.displayName = "Header";
