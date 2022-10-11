import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { useAppDispatch, useAppSelector } from "../redux-store/product-hook";
import produce from "immer";

const Products = () => {
  const products = useAppSelector((state) => state.products);
  console.log(products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (
          <ProductItem
            id={p.id}
            key={p.title}
            title={p.title}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
