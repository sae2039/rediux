import classes from "./Counter.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, RootState } from "../store";
import { useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { incrementCounter } = bindActionCreators(actionCreators, dispatch);
  const toggleCounterHandler = () => {
    incrementCounter(100);
  };
  const counter = useSelector((state: RootState) => state.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>increment Counter</button>
    </main>
  );
};

export default Counter;
