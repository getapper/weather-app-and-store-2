import React, { memo } from "react";
import { useShopProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Button, Stack, Typography } from "@mui/material";

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
}) => {
  const { navigate } = useShopProduct();

  return (
    <>
      <Stack direction="column" spacing={1} onClick={onClick}>
        <Image src={src} width={100} height={300} alt={alt} />
        <Typography>{label}</Typography>
        <Typography>{price}$</Typography>
        {sku && description && (
          <>
            <Typography>{sku}</Typography>
            <Typography>{description}</Typography>
          </>
        )}
        {disponibile !== undefined && (
          <Typography sx={{ color: disponibile ? "green" : "red" }}>
            {disponibile ? "Disponibile" : "Non diponibile"}
          </Typography>
        )}
        <Button onClick={handleAddToCart} disabled={!disponibile}>
          Aggiungi al carrello
        </Button>
      </Stack>
    </>
  );
};

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
