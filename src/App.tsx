import React, { Fragment } from "react";

import "./App.css";
import Cart from "./components/sideEffect/Cart/Cart";
import Layout from "./components/sideEffect/Layout/Layout";
import Products from "./components/sideEffect/Shop/Products";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "./components/sideEffect/redux-store/product-hook/index";
import { uiAction } from "./components/sideEffect/redux-store/ui-slice";
import Notification from "./components/sideEffect/UI/Notifiction";

import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const showCard = useAppSelector((state) => state.ui.showCard);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    const openNotification = false;
    dispatch(uiAction.closeNotifiction({ openNotification }));
  };
  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiAction.showNotifiction({
          status: "pending",
          title: "Sending ...",
          message: "Sending Cart Data!",
          openNotification: true,
        })
      );
      const response = await fetch(
        "https://redux-b63ae-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Etwas is schief gelaufen!");
      }
      const responsData = await response.json();
      dispatch(
        uiAction.showNotifiction({
          status: "success",
          title: "Success",
          message: "Sending Cart Data Successfully!",
          openNotification: true,
        })
      );
    };

    sendData().catch((error) => {
      dispatch(
        uiAction.showNotifiction({
          status: "error",
          title: "Errot=r",
          message: "Sending Cart Data Faild",
          openNotification: true,
        })
      );
    });
  }, [cart, dispatch]);
  const notification = useAppSelector((state) => state.ui.notification);
  console.log(notification);
  const open = useAppSelector(
    (state) => state.ui.notification.openNotification
  );
  return (
    <Fragment>
      {notification && (
        <Notification>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                {notification.message}
              </Alert>
            </Snackbar>
          </Stack>
        </Notification>
      )}
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
