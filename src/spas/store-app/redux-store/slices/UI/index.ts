import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./UI.selectors";
import { UiState } from "./UI.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./UI.sagas";

const initialState: UiState = {
  isCheckoutDialogOpen: false,
  isOrderRecapDialogOpen: false,
};

export const UIStore = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setCheckoutDialogIsOpen: (state, action) => {
      state.isCheckoutDialogOpen = action.payload;
    },
    setOrderRecapDialogIsOpen: (state, action) => {
      state.isOrderRecapDialogOpen = action.payload;
    },
  },
});

export { selectors, sagas };
