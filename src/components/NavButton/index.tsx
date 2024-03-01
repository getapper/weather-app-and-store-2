import React, { memo } from "react";
import { useNavButton } from "./index.hooks";
import { Button, ButtonProps, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
type NavButtonProps = {
  path?: string;
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
      <>
        <Button
          variant={props?.variant ?? "contained"}
          onClick={() => navigate(path)}
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            py: 2,
          }}
        >
          {icon ? <>{icon}</> : <HomeIcon />}
          {label !== "" ? (
            <Typography ml={2} textTransform="none">
              {label}
            </Typography>
          ) : (
            <></>
          )}
        </Button>
      </>
    );
  },
);
NavButton.displayName = "NavButton";
