import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";
import { Button } from "@mui/material";
import { CheckoutDialogForm } from "@/components/CheckoutDialogForm";

type CartSceneProps = {};

export const CartScene = memo(({}: CartSceneProps) => {
  const { products, showDialog } = useCartScene();

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
      <Button onClick={showDialog}>Effettua il checkout</Button>
      <CheckoutDialogForm />
    </>
  );
});

CartScene.displayName = "CartScene";
