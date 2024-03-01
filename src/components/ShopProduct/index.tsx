import React, { memo } from "react";
import { useShopProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Button, Paper, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type ShopProductProps = {
  src: StaticImageData;
  alt?: string;
  label: string;
  price: number;
  onClick?: () => void;
  sku?: string;
  description?: string;
  disponibile?: boolean;
  handleAddToCart?: () => void;
  heigth?: number;
  width?: number;
};

const ShopProduct: React.FC<ShopProductProps> = ({
  src,
  alt = "Product img",
  label,
  price,
  onClick,
  sku,
  description,
  handleAddToCart,
  disponibile,
  heigth,
  width,
}) => {
  const { navigate } = useShopProduct();

  return (
    <>
      <Stack direction="column">
        <Stack
          boxShadow={2}
          direction="column"
          onClick={onClick}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
            justifyContent: "center",
            alignItems: "center",
            py: 5,
          }}
          spacing={2}
        >
          <Image
            src={src}
            width={width ?? 200}
            height={heigth ?? 300}
            alt={alt}
          />
          <Typography fontWeight={600}>{label}</Typography>
          <Typography>{price}$</Typography>
        </Stack>

        {sku && description && (
          <Stack spacing={3}>
            <Typography>{sku}</Typography>
            <Typography>{description}</Typography>
            {disponibile !== undefined && (
              <Typography sx={{ color: disponibile ? "green" : "red" }}>
                {disponibile ? "Disponibile" : "Non diponibile"}
              </Typography>
            )}
          </Stack>
        )}

        {sku && description && (
          <Button
            variant="contained"
            onClick={handleAddToCart}
            disabled={!disponibile}
            sx={{ fontWeight: 600, fontSize: 20, width: 400, mt: 5 }}
          >
            <AddShoppingCartIcon sx={{ mr: 3 }} />
            Aggiungi al carrello
          </Button>
        )}
      </Stack>
    </>
  );
};

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
