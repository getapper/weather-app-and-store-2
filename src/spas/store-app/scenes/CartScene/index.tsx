import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";
import { Button, Stack, Typography } from "@mui/material";
import { CheckoutDialogForm } from "@/components/CheckoutDialogForm";
import { OrderRecapDialog } from "@/components/OrderRecapDialog";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

type CartSceneProps = {};

export const CartScene = memo(({}: CartSceneProps) => {
  const { products, showCheckoutDialog, showOrderRecapDialog, lastOrder } =
    useCartScene();

  return (
    <>
      <Stack direction="row" p={2} justifyContent="space-between">
        <Typography variant="h2">Carrello:</Typography>
        <NavButton />
      </Stack>
      <Stack spacing={5} alignItems="center">
        <Stack
          direction="column"
          sx={{ overflowY: "scroll" }}
          height={600}
          width={600}
          boxShadow={2}
          spacing={2}
          mx={100}
        >
          {products.map((product, i) => (
            <ShopProduct
              src={product.src}
              label={product.label}
              price={product.price}
              key={i}
            />
          ))}
        </Stack>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
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
      </Stack>
      <CheckoutDialogForm />
      <OrderRecapDialog />
    </>
  );
});

CartScene.displayName = "CartScene";
