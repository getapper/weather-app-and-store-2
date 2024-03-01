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
      <Product
        src={product?.src}
        label={product?.label}
        price={product?.price}
        sku={product?.sku}
        description={product?.description}
        disponibile={product.disponibile}
        heigth={400}
        width={300}
      />
      <Stack justifyContent={"center"} alignItems={"center"} mb={10}>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          disabled={!product?.disponibile}
          sx={{ fontWeight: 600, fontSize: 20, width: 400, mt: 5 }}
        >
          <AddShoppingCartIcon sx={{ mr: 3 }} />
          Aggiungi al carrello
        </Button>
      </Stack>
    </>
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
