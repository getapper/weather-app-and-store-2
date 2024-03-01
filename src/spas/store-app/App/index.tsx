import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useAppHooks from "./index.hooks";
import { CartScene, ProductDetailsScene, StoreHomeScene } from "../scenes";
import { AppSnackbar } from "@/components/AppSnackbar";
import { NavButton } from "@/components/NavButton";
import ShopProduct from "@/components/ShopProduct";
import { Header } from "@/components/Header";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/store-app">
        <Header />
        <Routes>
          <Route path="/" element={<StoreHomeScene />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetailsScene />}
          />
          <Route path="/cart" element={<CartScene />} />
        </Routes>
      </BrowserRouter>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default memo(App);
