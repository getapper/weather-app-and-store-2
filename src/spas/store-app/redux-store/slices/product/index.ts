import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ProductState } from "./product.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./product.sagas";
import { IProduct } from "@/models/client/Product";

const initialState: ProductState = { currentElem: null };

export const productStore = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentProduct: (state, payload: PayloadAction<IProduct>) => {
      state.currentElem = payload.payload;
    },
  },
});

export { selectors, sagas };
