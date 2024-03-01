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
  ({
    path = "/",
    label = "Torna alla home",
    icon,
    ...props
  }: NavButtonProps) => {
    const { navigate } = useNavButton();

    return (
      <Button
        variant={props?.variant ?? "contained"}
        onClick={() => navigate(path)}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          py: 2,
        }}
      >
        {icon ? (
          <span style={{ marginRight: 8 }}>{icon}</span>
        ) : (
          <HomeIcon sx={{ mr: 2 }} />
        )}
        {label}
      </Button>
    );
  },
);
NavButton.displayName = "NavButton";
