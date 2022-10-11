import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "./products-slice";

interface cart {
  items: ProductType[];
  totalQuentity: number;
}
const initialState: cart = {
  items: [],
  totalQuentity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ProductType>) {
      const newItem = action.payload;

      const exixtingItem = state.items.find((item) => item.id === newItem.id);

      console.log(exixtingItem);
      if (!exixtingItem) {
        state.items.push(newItem);
      } else {
        state.totalQuentity + 1;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
