import { createTheme, responsiveFontSizes } from "@mui/material";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#8c2f8f",
      },
      text: {
        primary: "#8c2f8f",
        secondary: "#fff",
      },
    },
    components: {
      /* MuiIcon: {
        styleOverrides: {
          root: {
            color: "secondary",
          },
        },
      }, */
      MuiButton: {
        styleOverrides: {
          root: {
            color: "primary",
            backgroundColor: "secondary",
          },
        },
      },
    },
  }),
);
