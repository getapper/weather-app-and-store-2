import React, { memo } from "react";
import { useCartScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";

type CartSceneProps = {};

export const CartScene = memo(({}: CartSceneProps) => {
  const { products } = useCartScene();

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
    </>
  );
});

CartScene.displayName = "CartScene";
