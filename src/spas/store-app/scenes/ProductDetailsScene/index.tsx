import React, { memo } from "react";
import { useProductDetailsScene } from "./index.hooks";
import Product from "@/components/Product";
import { NavButton } from "@/components/NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type ProductDetailsSceneProps = {};

export const ProductDetailsScene = memo(({}: ProductDetailsSceneProps) => {
  const { product, handleAddToCart } = useProductDetailsScene();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        mb={10}
        direction="row"
        px={10}
      >
        <Product
          src={product?.src}
          sku={product?.sku}
          description={product?.description}
          disponibile={product.disponibile}
          price={product?.price}
          label={product?.label}
          heigth={600}
          width={400}
          isDetail={true}
          sx={{ "& .handleAddToCartBtn": { display: "none" } }}
          handleAddToCart={handleAddToCart}
        />
      </Stack>
    </>
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
