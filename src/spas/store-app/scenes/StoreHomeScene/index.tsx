import React, { memo } from "react";
import { useStoreHomeScene } from "./index.hooks";
import ShopProduct from "@/components/ShopProduct";
import { Grid, Typography } from "@mui/material";

type StoreHomeSceneProps = {};

export const StoreHomeScene = memo(({}: StoreHomeSceneProps) => {
  const { products, openProductDetails } = useStoreHomeScene();

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography>Shop</Typography>
        </Grid>

        <Grid container item>
          {products.map((elem, i) => (
            <ShopProduct
              src={elem.src}
              label={elem.label}
              price={elem.price}
              key={elem.id}
              alt={elem.label}
              onClick={() => openProductDetails(elem.id.toString())}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
});

StoreHomeScene.displayName = "StoreHomeScene";
