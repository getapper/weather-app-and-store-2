import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./UI.selectors";
import { UiState } from "./UI.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./UI.sagas";

const initialState: UiState = {
  isDialogOpen: false,
};

export const UIStore = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setDialogIsOpen: (state, action) => {
      state.isDialogOpen = action.payload;
    },
  },
});

export { selectors, sagas };
