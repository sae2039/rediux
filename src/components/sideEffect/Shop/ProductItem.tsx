import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../redux-store/cart-slice";
import { useAppDispatch } from "../redux-store/product-hook/index";

export interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
}
const ProductItem = ({
  id,
  title,
  price,
  description,
  quantity,
}: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const addItem = () => {
    dispatch(
      cartAction.addItemToCart({ id, title, price, description, quantity })
    );
  };
  return (
    <li className={classes.item}>
      <Card className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
