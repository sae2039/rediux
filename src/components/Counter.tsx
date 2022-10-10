import classes from "./Counter.module.css";
import { counterActions } from "../redux-store/counter-slice";
import { useAppDispatch, useAppSelector } from "../redux-store/types/HooksType";

const Counter = () => {
  const dispatch = useAppDispatch();
  const incCounterHandler = () => {
    dispatch(counterActions.increment(15));
  };
  const decCounterHandler = () => {
    dispatch(counterActions.decrement(5));
  };
  const counter = useAppSelector((state) => state.counter.counter); // select der Teil von Daten in Store, die wir brauchen und gleichzeitig macht ein Subscribtion

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
