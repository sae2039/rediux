import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { useAppSelector } from "../redux-store/product-hook";

const Products = () => {
  const products = useAppSelector((state) => state.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (
          <ProductItem
            id={p.id}
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            quantity={p.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
