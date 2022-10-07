import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { stateType } from "../store/types/store.type";
const Counter = () => {
  const dispatch = useDispatch();
  const incCounterHandler = () => {
    dispatch({ type: "increment", payload: 10 });
  };
  const decCounterHandler = () => {
    dispatch({ type: "decrement", payload: 5 });
  };
  const counter = useSelector((state: stateType) => state.counter); // select der Teil von Daten in Store, die wir brauchen und gleichzeitig macht ein Subscribtion

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incCounterHandler}>increment 10</button>
      <button onClick={decCounterHandler}>decrement 5%</button>
    </main>
  );
};

export default Counter;
