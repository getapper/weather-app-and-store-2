import { createTheme, responsiveFontSizes } from "@mui/material";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#5378B2",
      },
      secondary: {
        main: "#8B8A9D",
      },
    },
  }),
);
