import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  showCard: false,
};
const uiSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCard(state) {
      state.showCard = !state.showCard;
    },
  },
});

export const uiAction = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
