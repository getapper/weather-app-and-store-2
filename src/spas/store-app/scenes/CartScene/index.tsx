import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import Product from "@/components/Product";
import { NavButton } from "@/components/NavButton";
import {
  Button,
  Grid,
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
      <Grid container alignItems="center" justifyContent="center" mt={5}>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          display="flex"
          md={12}
          lg={6}
          sx={{ px: 10, pl: 10 }}
        >
          <Grid
            item
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Button
              variant="contained"
              onClick={showCheckoutDialog}
              sx={{ textTransform: "none", p: 5, fontSize: 15, mb: 1 }}
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
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <List
              sx={{ boxShadow: 2, mt: 3, pb: 0 }}
              /* subheader={
                <ListSubheader sx={{ fontSize: 20 }} color="secondary">
                  Prodotti
                </ListSubheader>
              } */
            >
              {products.map((product, i) => (
                <ListItem
                  key={i}
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    bgcolor: i % 2 ? "white" : "whitesmoke",
                  }}
                >
                  <ListItemText>{product.sku}</ListItemText>
                  <ListItemText sx={{ textAlign: "end" }}>
                    {"" + product.label}
                  </ListItemText>
                  <ListItemText sx={{ textAlign: "end" }}>
                    {product.price + " $"}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography sx={{ pr: 2, mt: 5, textAlign: "end" }}>
              {"Totale: " +
                products.reduce((acc, e) => (acc += e.price), 0) +
                " $"}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          md={12}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              overflowY: products.length === 1 ? "hidden" : "scroll",
              scrollbarWidth: "none",
              maxHeight: 650,
            }}
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
          </Grid>
        </Grid>
      </Grid>

      <CheckoutDialogForm />
      <OrderRecapDialog />
    </>
  );
});

CartScene.displayName = "CartScene";
