import React, { Fragment } from "react";

import "./App.css";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Cart from "./components/sideEffect/Cart/Cart";
import Layout from "./components/sideEffect/Layout/Layout";
import Products from "./components/sideEffect/Shop/Products";

import {
  useAppSelector,
  useAppDispatch,
} from "./components/sideEffect/redux-store/product-hook";

import {
  uiAction,
  uiReducer,
} from "./components/sideEffect/redux-store/ui-slice";

function App() {
  const showCard = useAppSelector((state) => state.ui.showCard);
  return (
    <Fragment>
      {/* <Header />
      <Auth />
      <Counter /> */}
      <Layout>Buy your favorite Products</Layout>
      {showCard && <Cart />}
      <Products />
    </Fragment>
  );
}

export default App;
