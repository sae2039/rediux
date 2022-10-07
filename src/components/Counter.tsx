import classes from "./Counter.module.css";
import { counterActions } from "../redux-store";
import { useSelector, useDispatch } from "react-redux";

import { stateType } from "../store/types/store.type";
const Counter = () => {
  const dispatch = useDispatch();
  const incCounterHandler = () => {
    dispatch(counterActions.increment(15));
  };
  const decCounterHandler = () => {
    dispatch(counterActions.decrement(10));
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
