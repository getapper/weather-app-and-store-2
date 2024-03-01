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
      <Grid container px={10}>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          xs={12}
          px={3}
          py={4}
        >
          <Typography variant="h2">Shop</Typography>
          <NavButton
            variant="contained"
            path="/cart"
            label="Vai al carrello"
            icon={<ShoppingCartIcon />}
          />
        </Grid>
        <Grid item my={5}>
          <Divider />
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
