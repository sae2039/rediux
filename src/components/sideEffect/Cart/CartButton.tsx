import classes from "./CartButton.module.css";

import { uiAction } from "../redux-store/ui-slice";
import { useAppDispatch, useAppSelector } from "../redux-store/product-hook";
const CartButton = () => {
  const cart = useAppSelector((state) => state.cart.items);
  console.log(cart);
  const quantity = useAppSelector((state) => state.cart.totalQuentity);
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(uiAction.toggleCard());
  };
  return (
    <button className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
