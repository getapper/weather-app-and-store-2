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

            <Button onClick={handleAddToCart}>Aggiungi al carrello</Button>
          </>
        )}
      </Stack>
    </>
  );
};

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
