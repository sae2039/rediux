import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart-slice";
import { productAction, productReducer } from "./products-slice";
import { uiReducer } from "./ui-slice";
const stores = configureStore({
  reducer: { products: productReducer, ui: uiReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof stores.getState>;
export type appDispatch = typeof stores.dispatch;

export default stores;
