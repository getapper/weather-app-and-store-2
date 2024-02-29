import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./cart.selectors";
import { CartState } from "./cart.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./cart.sagas";
import { IProduct } from "@/models/client/Product";

const initialState: CartState = { items: [] };

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IProduct>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export { selectors, sagas };
