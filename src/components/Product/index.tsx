import React, { CSSProperties, memo } from "react";
import { useProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import {
  Button,
  Grid,
  Stack,
  StackProps,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { RemoveShoppingCartRounded } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

//TODO: pass as prop an obj for product instead of single props
type ProductProps = {
  src: StaticImageData;
  alt?: string;
  label?: string;
  price?: number;
  goToProductInfo?: () => void;
  sku?: string;
  description?: string;
  disponibile?: boolean;
  heigth?: number;
  width?: number;
  handleAddToCart?: () => void;
  handleDeleteFromCart?: () => void;
  isDetail?: boolean;
} & StackProps;

const imageStyle: CSSProperties = {
  borderRadius: 15,
  boxShadow: "40 rgba(0, 0, 0, 0.1)",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const Product: React.FC<ProductProps> = ({
  src,
  alt = "Product img",
  label,
  price,
  goToProductInfo,
  sku,
  description,
  disponibile,
  heigth,
  width,
  handleAddToCart,
  handleDeleteFromCart,
  isDetail,
  ...props
}) => {
  const { showCheckoutDialog } = useProduct();

  return (
    <Grid container direction="row">
      <Grid
        container
        item
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          py: 5,
          position: "relative",
        }}
        spacing={1}
        xs={12}
        md={6}
      >
        <Image
          src={src}
          width={width ?? 300}
          height={heigth ?? 450}
          alt={alt}
          style={imageStyle}
        />
        {!!price && !isDetail && (
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "secondary",
              color: "primary",
              px: 3,
              py: 1,
              bottom: 65,
              borderRadius: 10,
              fontWeight: 600,
            }}
          >
            {price + " $"}
          </Typography>
        )}
        {label && !isDetail && (
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "secondary",
              color: "primary",
              px: 3,
              py: 1,
              top: 20,
              borderRadius: 10,
              fontWeight: 600,
            }}
          >
            {label}
          </Typography>
        )}

        <Stack
          direction="row"
          justifyContent="space-between"
          width={width ?? 300}
        >
          {goToProductInfo && (
            <Tooltip title={"Aggiungi al carrello"}>
              <Button
                className="handleAddToCartBtn"
                sx={{
                  bottom: 50,
                  borderRadius: 100,
                }}
                onClick={handleAddToCart}
              >
                <AddShoppingCartIcon color="primary" />
              </Button>
            </Tooltip>
          )}
          {handleAddToCart && (
            <Tooltip title="Mostra informazioni prodotto">
              <Button
                className="handleAddToCartBtn"
                variant="text"
                sx={{
                  bottom: 50,
                }}
                onClick={goToProductInfo}
              >
                <InfoIcon color="primary" />
              </Button>
            </Tooltip>
          )}
          {handleDeleteFromCart && (
            <Tooltip title="Rimuovi dal carrello">
              <Button
                variant="text"
                sx={{
                  bottom: 50,
                  right: 0,
                }}
                onClick={handleDeleteFromCart}
              >
                <RemoveShoppingCartRounded color="primary" />
              </Button>
            </Tooltip>
          )}
        </Stack>
      </Grid>
      {sku && description && (
        <Grid
          item
          container
          spacing={3}
          xs={12}
          md={6}
          sx={{ p: 10, pt: { md: 5, xs: 0 } }}
        >
          <Grid item color="black">
            {/* TODO: improve */}
            <Stack spacing={2}>
              <Typography>{"Nome prodotto: " + label}</Typography>
              <Typography>{"Prezzo: " + price + " $"}</Typography>
              <Typography>{"SKU: " + sku}</Typography>
              <Typography>{description}</Typography>
              {disponibile !== undefined && (
                <Typography sx={{ color: disponibile ? "green" : "red" }}>
                  {disponibile ? "Disponibile" : "Non diponibile"}
                </Typography>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddToCart}
              disabled={!disponibile}
              sx={{ textTransform: "none", p: 5, fontSize: 15, width: "100%" }}
            >
              <AddShoppingCartIcon sx={{ mr: 3 }} />
              Aggiungi al carrello
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={showCheckoutDialog}
              sx={{ textTransform: "none", p: 5, fontSize: 15, width: "100%" }}
            >
              <ShoppingCartCheckoutIcon sx={{ mr: 2 }} /> Effettua il checkout
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default memo(Product);
Product.displayName = "Product";
