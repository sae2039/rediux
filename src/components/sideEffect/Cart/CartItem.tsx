import classes from "./CartItem.module.css";
import { useAppDispatch } from "../redux-store/product-hook";
import { cartAction } from "../redux-store/cart-slice";
import { ProductItemProps } from "../Shop/ProductItem";
import { title } from "process";
interface CartItemInterface {
  key: number;
  id: number;
  title: string;
  quantity: number;
  total: number;
  price: number;
  description: string;
}
type cartItem = {
  item: ProductItemProps;
  total: number;
};
const CartItem = ({
  key,
  id,
  title,
  price,
  description,
  quantity,
  total,
}: CartItemInterface) => {
  const dispatch = useAppDispatch();
  const add = () => {
    dispatch(
      cartAction.addItemToCart({ id, title, price, description, quantity })
    );
  };
  const minus = () => {
    dispatch(
      cartAction.removeItem({ id, title, price, description, quantity })
    );
  };
  //const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minus}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
