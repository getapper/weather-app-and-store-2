import React, { memo } from "react";
import { useStoreHomeScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { Button, Grid, Typography } from "@mui/material";
import { NavButton } from "@/components/NavButton";

type StoreHomeSceneProps = {};

export const StoreHomeScene = memo(({}: StoreHomeSceneProps) => {
  const { products, openProductDetails, navigate } = useStoreHomeScene();

  return (
    <>
      <Grid container>
        <Grid item display="flex" justifyContent="space-between" xs={12}>
          <Typography>Shop</Typography>
          <NavButton path="/cart" label="Vai al carrello" />
        </Grid>

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
