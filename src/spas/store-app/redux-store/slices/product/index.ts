import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ProductState } from "./product.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./product.sagas";
import { StaticImageData } from "next/image";
type Product = {
  src: StaticImageData;
  label: string;
  price: number;
  id: number;
  descrizione: string;
  sku: string;
  disponibile: boolean;
  description: string;
};
const initialState: ProductState = { currentElem: null };

export const productStore = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentProduct: (state, payload: PayloadAction<Product>) => {
      state.currentElem = payload.payload;
    },
  },
});

export { selectors, sagas };
