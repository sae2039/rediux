import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useAppSelector } from "../redux-store/product-hook";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuentity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            description={item.description}
            title={item.title}
            quantity={item.quantity}
            total={item.quantity * item.price}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
