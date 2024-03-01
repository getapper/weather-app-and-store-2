import React, { memo } from "react";
import { useStoreHomeScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { Divider, Grid, Typography } from "@mui/material";
import { NavButton } from "@/components/NavButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type StoreHomeSceneProps = {};

export const StoreHomeScene = memo(({}: StoreHomeSceneProps) => {
  const { products, openProductDetails } = useStoreHomeScene();

  return (
    <>
      <Grid container px={10} mt={10}>
        <Grid container item>
          {products.map((elem, i) => (
            <Grid item key={i} md={6} xs={12} lg={3}>
              <ShopProduct
                src={elem.src}
                label={elem.label}
                price={elem.price}
                key={elem.id}
                alt={elem.label}
                onClick={() => openProductDetails(elem.id.toString())}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
});

StoreHomeScene.displayName = "StoreHomeScene";
