import React, { memo } from "react";
import { useShopProduct } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Stack, Typography } from "@mui/material";

type ShopProductProps = {
  src: StaticImageData;
  width;
  heigth;
  alt?: string;
  label: string;
  price: number;
};

const ShopProduct: React.FC<ShopProductProps> = ({
  src,
  width,
  heigth,
  alt = "Product img",
  label,
  price,
}) => {
  const {} = useShopProduct();

  return (
    <>
      <Stack direction="column" spacing={1}>
        <Image src={src} width={width} height={heigth} alt={alt} />
        <Typography>{label}</Typography>
        <Typography>{price}$</Typography>
      </Stack>
    </>
  );
};

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
