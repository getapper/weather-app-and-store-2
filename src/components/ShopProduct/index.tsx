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
  disponibile?: boolean;
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
  disponibile,
  heigth,
  width,
}) => {
  const {} = useShopProduct();

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
          <Stack spacing={3} px={30} mt={5}>
            <Typography>{sku}</Typography>
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

export default memo(ShopProduct);
ShopProduct.displayName = "ShopProduct";
