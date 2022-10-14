import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./products-slice";

export interface cart {
  items: ProductType[];
  totalQuentity: number;
  isChanged: boolean;
}
const initialState: cart = {
  items: [],
  totalQuentity: 0,
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      if (action.payload) {
        state.totalQuentity = action.payload.totalQuentity;
        state.items = action.payload.items;
      } else {
        state.totalQuentity = state.totalQuentity = 0;
      }
    },
    addItemToCart(state, action: PayloadAction<ProductType>) {
      const newItem = action.payload;
      state.isChanged = true;
      const exixtingItem = state.items.find((item) => item.id === newItem.id);
      if (!exixtingItem) {
        newItem.quantity = 1;
        state.items.push(newItem);
        state.totalQuentity += 1;
      } else {
        exixtingItem.quantity += 1;
        state.totalQuentity += 1;
      }
    },
    removeItem(state, action: PayloadAction<ProductType>) {
      const newItem = action.payload;
      const exixtingItem = state.items.find((item) => item.id === newItem.id);
      state.isChanged = true;
      if (exixtingItem) {
        if (exixtingItem.quantity > 1) {
          state.totalQuentity -= 1;
          exixtingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id != newItem.id);
          state.totalQuentity -= 1;
        }
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
