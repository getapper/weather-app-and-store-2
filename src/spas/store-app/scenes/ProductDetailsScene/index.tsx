import React, { memo } from "react";
import { useProductDetailsScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";

type ProductDetailsSceneProps = {};

export const ProductDetailsScene = memo(({}: ProductDetailsSceneProps) => {
  const { product } = useProductDetailsScene();

  return (
    <ShopProduct
      src={product?.src}
      label={product?.label}
      price={product?.price}
      sku={product?.sku}
      description={product?.description}
    />
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
