import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";
import { Button } from "@mui/material";
import { CheckoutDialogForm } from "@/components/CheckoutDialogForm";
import { OrderRecapDialog } from "@/components/OrderRecapDialog";

type CartSceneProps = {};

export const CartScene = memo(({}: CartSceneProps) => {
  const { products, showCheckoutDialog, showOrderRecapDialog } = useCartScene();

  return (
    <>
      <NavButton />
      {products.map((product) => (
        <ShopProduct
          src={product.src}
          label={product.label}
          price={product.price}
          key={product.id}
        />
      ))}
      <Button onClick={showCheckoutDialog}>Effettua il checkout</Button>
      <Button onClick={showOrderRecapDialog}>
        Visualizza riepilogo ordine
      </Button>
      <CheckoutDialogForm />
      <OrderRecapDialog />
    </>
  );
});

CartScene.displayName = "CartScene";
