import React, { memo } from "react";
import { useNavButton } from "./index.hooks";
import { Button } from "@mui/material";

type NavButtonProps = { path?; label?: string };

export const NavButton = memo(
  ({ path = "/", label = "Torna alla home" }: NavButtonProps) => {
    const { navigate } = useNavButton();

    return <Button onClick={() => navigate(path)}>{label}</Button>;
  },
);
NavButton.displayName = "NavButton";
