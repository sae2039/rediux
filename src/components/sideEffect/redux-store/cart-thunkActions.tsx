import { uiAction } from "./ui-slice";
import { cart } from "./cart-slice";
import { appDispatch } from "./index";
import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch: appDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-b63ae-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response) {
        throw new Error("Could not fetch Cart Data!");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData));
      dispatch(
        uiAction.showNotifiction({
          status: "success",
          title: "Success",
          message: "Fetching Cart Data Successfully!",
          openNotification: true,
        })
      );
    } catch {
      dispatch(
        uiAction.showNotifiction({
          status: "error",
          title: "Errot=r",
          message: "Fetching Cart Data Faild",
          openNotification: true,
        })
      );
    }
  };
};

export const sendCratData = (cart: cart) => {
  return async function sendCratDataThunk(dispatch: appDispatch) {
    dispatch(
      uiAction.showNotifiction({
        status: "pending",
        title: "Sending ...",
        message: "Sending Cart Data!",
        openNotification: true,
      })
    );
    // eslint-disable-next-line
    const sendRequest = async () => {
      // eslint-disable-next-line
      const response = await fetch(
        "https://redux-b63ae-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuentity: cart.totalQuentity,
          }),
        }
      );
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotifiction({
          status: "success",
          title: "Success",
          message: "Sending Cart Data Successfully!",
          openNotification: true,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotifiction({
          status: "error",
          title: "Errot=r",
          message: "Sending Cart Data Faild",
          openNotification: true,
        })
      );
    }
  };
};
