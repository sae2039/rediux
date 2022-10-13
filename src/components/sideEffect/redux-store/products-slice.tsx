import { createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
};

const productInitialState = [
  {
    id: 1,
    title: "Test",
    price: 12,
    description: "This is a first product - amazing!",
    quantity: 0,
  },
  {
    id: 2,
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
    quantity: 0,
  },
];

const ProductSlice = createSlice({
  name: "Product",
  initialState: productInitialState,
  reducers: {
    add_product(state) {
      return state;
    },
    rm_product(state) {
      return state;
    },
    del_product(state) {
      return state;
    },
  },
});
export const productAction = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
