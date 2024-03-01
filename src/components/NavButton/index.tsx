import React, { memo } from "react";
import { useNavButton } from "./index.hooks";
import { Button, ButtonProps } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
type NavButtonProps = {
  path?;
  label?: string;
  icon?: React.ReactNode;
} & ButtonProps;

export const NavButton = memo(
  ({ path = "/", label = "Torna alla home", icon }: NavButtonProps) => {
    const { navigate } = useNavButton();

    return (
      <Button
        onClick={() => navigate(path)}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {icon ? <span style={{ marginRight: 8 }}>{icon}</span> : <HomeIcon />}
        {label}
      </Button>
    );
  },
);
NavButton.displayName = "NavButton";
