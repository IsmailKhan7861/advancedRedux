import { createSlice } from "@reduxjs/toolkit";
const initialState = { isVisible: true };
const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const uiActons = uiSlice.actions;
export default uiSlice;