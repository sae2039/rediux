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
