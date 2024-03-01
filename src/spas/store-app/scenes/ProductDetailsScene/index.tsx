import React, { memo } from "react";
import { useProductDetailsScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";

type ProductDetailsSceneProps = {};

export const ProductDetailsScene = memo(({}: ProductDetailsSceneProps) => {
  const { product, handleAddToCart } = useProductDetailsScene();

  return (
    <>
      <NavButton />
      <ShopProduct
        src={product?.src}
        label={product?.label}
        price={product?.price}
        sku={product?.sku}
        description={product?.description}
        handleAddToCart={handleAddToCart}
      />
      <NavButton path="/cart" label="Vai al carrello" />
    </>
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
