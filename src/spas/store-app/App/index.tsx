import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useAppHooks from "./index.hooks";
import { CartScene, ProductDetailsScene, StoreHomeScene } from "../scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/store-app">
        <Routes>
          <Route path="/" element={<StoreHomeScene />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetailsScene />}
          />
          <Route path="/cart" element={<CartScene />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(App);
