import React, { CSSProperties, memo } from "react";
import { useProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Button, Stack, StackProps, Tooltip, Typography } from "@mui/material";
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
  ...props
}) => {
  const { showCheckoutDialog } = useProduct();

  return (
    <Stack>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          py: 5,
          position: "relative",
        }}
        spacing={1}
      >
        <Image
          src={src}
          width={width ?? 300}
          height={heigth ?? 450}
          alt={alt}
          style={imageStyle}
        />
        {!!price && (
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "white",
              color: "black",
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
        {label && (
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "white",
              color: "black",
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
                <AddShoppingCartIcon />
                {/* TODO: change color with theme */}
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
                <InfoIcon /> {/* TODO: change color with theme */}
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
                <RemoveShoppingCartRounded />{" "}
                {/* TODO: change color with theme */}
              </Button>
            </Tooltip>
          )}
        </Stack>
      </Stack>

      {sku && description && (
        <Stack sx={{ px: 30, mt: 5 }} spacing={3}>
          <Typography>{"Nome prodotto: " + label}</Typography>
          <Typography>{"Prezzo: " + price}</Typography>
          <Typography>{"SKU: " + sku}</Typography>
          <Typography>{description}</Typography>
          {disponibile !== undefined && (
            <Typography sx={{ color: disponibile ? "green" : "red" }}>
              {disponibile ? "Disponibile" : "Non diponibile"}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={handleAddToCart}
            disabled={!disponibile}
            sx={{ textTransform: "none", p: 5, fontSize: 15 }}
          >
            <AddShoppingCartIcon sx={{ mr: 3 }} />
            Aggiungi al carrello
          </Button>
          <Button
            variant="contained"
            onClick={showCheckoutDialog}
            sx={{ textTransform: "none", p: 5, fontSize: 15 }}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: 2 }} /> Effettua il checkout
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default memo(Product);
Product.displayName = "Product";
