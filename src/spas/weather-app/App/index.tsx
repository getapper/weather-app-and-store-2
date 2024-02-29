import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useAppHooks from "./index.hooks";
import { WheaterAppHomeScene } from "../scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/weather-app">
        <Routes>
          <Route path="/" element={<WheaterAppHomeScene />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(App);
