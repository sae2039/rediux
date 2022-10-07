import { ActionType } from "../types/actionType";
import { Dispatch } from "redux";
import { counterReducerType } from "../types/store.type";

export const incrementCounter = (counter: number) => {
  return (dispatch: Dispatch<counterReducerType>) => {
    dispatch({
      type: ActionType.DEC,
      payload: counter,
    });
  };
};

export const decrementCounter = (counter: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DEC,
      payload: counter,
    });
  };
};

export const resetCounter = () => {
  return (dispatch: Dispatch<counterReducerType>) => {
    dispatch({
      type: ActionType.RES,
    });
  };
};
