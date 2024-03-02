import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import Product from "@/components/Product";
import { NavButton } from "@/components/NavButton";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { CheckoutDialogForm } from "@/components/CheckoutDialogForm";
import { OrderRecapDialog } from "@/components/OrderRecapDialog";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

type CartSceneProps = {};

export const CartScene = memo(({}: CartSceneProps) => {
  const {
    products,
    showCheckoutDialog,
    showOrderRecapDialog,
    lastOrder,
    handleDeleteFromCart,
  } = useCartScene();

  return (
    <>
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        mt={5}
        direction="row-reverse"
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            overflowY: products.length === 1 ? "hidden" : "scroll",
            scrollbarWidth: "none",
            px: 20,
          }}
          height={500}
          spacing={2}
          mx={100}
        >
          {products.map((product, i) => (
            <Product
              src={product.src}
              label={product.label}
              price={product.price}
              key={i}
              heigth={250}
              handleDeleteFromCart={() => handleDeleteFromCart(i)}
            />
          ))}
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          justifyContent="space-between"
          mt={5}
          px={15}
        >
          <Button
            variant="contained"
            onClick={showCheckoutDialog}
            sx={{ textTransform: "none", p: 5, fontSize: 15 }}
            disabled={!products.length}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: 2 }} /> Effettua il checkout
          </Button>
          <Button
            variant="contained"
            onClick={showOrderRecapDialog}
            disabled={!lastOrder}
            sx={{ textTransform: "none", p: 5, fontSize: 15 }}
          >
            <ReceiptLongIcon sx={{ mr: 2 }} />
            Visualizza riepilogo utlimo ordine
          </Button>
          <List
            subheader={
              <ListSubheader sx={{ fontSize: 20 }}>Prodotti</ListSubheader>
            }
          >
            {products.map((product, i) => (
              <ListItem
                key={i}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  display: "flex",
                }}
              >
                <ListItemText>{product.sku}</ListItemText>
                <ListItemText>{"  " + product.label}</ListItemText>
                <ListItemText>{product.price + " $"}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Typography>
            {"Totale: " +
              products.reduce((acc, e) => (acc += e.price), 0) +
              " $"}
          </Typography>
        </Stack>
      </Stack>

      <CheckoutDialogForm />
      <OrderRecapDialog />
    </>
  );
});

CartScene.displayName = "CartScene";
