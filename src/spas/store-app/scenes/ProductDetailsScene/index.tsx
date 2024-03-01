import React, { memo } from "react";
import { useProductDetailsScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { NavButton } from "@/components/NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
        disponibile={product.disponibile}
        handleAddToCart={handleAddToCart}
        heigth={500}
        width={300}
      />
      <NavButton
        variant="contained"
        path="/cart"
        label="Vai al carrello"
        icon={<ShoppingCartIcon />}
      />
    </>
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
