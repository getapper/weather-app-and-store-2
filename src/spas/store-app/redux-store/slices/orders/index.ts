import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./orders.selectors";
import { OrdersState } from "./orders.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./orders.sagas";
import { IOrder } from "@/models/client/Order";

const initialState: OrdersState = {
  list: [],
  currentOrder: null,
};

export const ordersStore = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.list = state.list.length
        ? [...state.list, action.payload]
        : [action.payload];
    },
    setCurrentOrder: (state, action: PayloadAction<IOrder>) => {
      state.currentOrder = action.payload;
    },
  },
});

export { selectors, sagas };
