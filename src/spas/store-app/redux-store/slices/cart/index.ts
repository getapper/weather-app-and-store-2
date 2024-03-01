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

      /* let exist = [...state.items].find(
        (item) => item.id === action.payload.id,
      );
      console.log({ exist });
      console.log(action.payload);
      if (!!exist) {
        if (Object.keys(exist).find((key) => key === "quantity")) {
          exist.quantity += 1;
        } else {
          exist = { ...exist, quantity: 1 };
        }
        state.items = [...state.items, exist];
      } else {
        state.items = [...state.items, action.payload];
      }
      console.log(
        Object.keys(exist).find((key) => key === "quantity"),
        Object.keys(exist),
      ); */
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const tmp = state.items.filter((e, i) => i !== action.payload);
      state.items = [...tmp];
      /* let exist = state.items.find((item) => item.id !== action.payload.id);
      const tmp = state.items.filter((item) => item.id !== exist.id);
      console.log(
        Object.keys(exist).find((key) => key === "quantity"),
        Object.keys(exist),
      );

      if (exist) {
        if (Object.keys(exist).find((key) => key === "quantity")) {
          if (exist.quantity && exist.quantity >= 2) {
            exist.quantity -= 1;
            state.items = [...tmp, exist];
          } else {
            state.items = [...tmp];
          }
          window.alert("Removed item");
        } else {
          window.alert("Item not removed");
        }
      } else {
        window.alert("Item not removed");
        console.log(
          "CART STORE removeItemFromCart() - This product does not exist in the cart",
        );
      } */
    },
  },
});

export { selectors, sagas };
