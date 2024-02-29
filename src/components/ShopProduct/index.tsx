import React, { memo } from "react";
import { useShopProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Stack, Typography } from "@mui/material";

type ShopProductProps = {
  src: StaticImageData;
  alt?: string;
  label: string;
  price: number;
  onClick?: () => void;
  sku?: string;
  description?: string;
};

const ShopProduct: React.FC<ShopProductProps> = ({
  src,
  alt = "Product img",
  label,
  price,
  onClick,
  sku,
  description,
}) => {
  const {} = useShopProduct();

  return (
    <>
      <Stack direction="column" spacing={1} onClick={onClick}>
        <Image src={src} width={100} height={300} alt={alt} />
        <Typography>{label}</Typography>
        <Typography>{price}$</Typography>
        {sku && <Typography>{sku}</Typography>}
        {description && <Typography>{description}</Typography>}
      </Stack>
    </>
  );
};

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
