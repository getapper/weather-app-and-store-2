import React, { CSSProperties, memo } from "react";
import { useProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

//TODO: pass as prop an obj for product instead of single props
type ProductProps = {
  src: StaticImageData;
  alt?: string;
  label: string;
  price: number;
  goToProductInfo?: () => void;
  sku?: string;
  description?: string;
  disponibile?: boolean;
  heigth?: number;
  width?: number;
  handleAddToCart?: () => void;
};

const imageStyle: CSSProperties = {
  borderRadius: 15,
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
}) => {
  const {} = useProduct();

  return (
    <>
      <Stack direction="column">
        <Stack
          boxShadow={2}
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            py: 5,
            position: "relative",
          }}
          spacing={1}
        >
          <Image
            src={src}
            width={width ?? 200}
            height={heigth ?? 300}
            alt={alt}
            style={imageStyle}
          />
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "white",
              color: "black",
              px: 3,
              py: 1,
              bottom: 20,
              borderRadius: 10,
              fontWeight: 600,
            }}
          >
            {price}$
          </Typography>
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
          {goToProductInfo && (
            <Button
              sx={{
                position: "absolute",
                bottom: 40,
                right: 40,
                borderRadius: 100,
              }}
              onClick={handleAddToCart}
            >
              <AddShoppingCartIcon />
              {/* TODO: change color with theme */}
            </Button>
          )}
          {handleAddToCart && (
            <Button
              variant="text"
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
              }}
              onClick={goToProductInfo}
            >
              <InfoIcon /> {/* TODO: change color with theme */}
            </Button>
          )}
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
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default memo(Product);
Product.displayName = "Product";
