import { createStore } from "redux";
import { ActionType } from "../store/types/actionType";
import { counterReducerType, stateType } from "../store/types/store.type";

const initialState = { counter: 0 };
const reducer = (
  state: stateType = initialState,
  action: counterReducerType
) => {
  switch (action.type) {
    case ActionType.INC:
      return {
        counter: state.counter + action.payload,
      };
    case ActionType.DEC:
      return {
        counter: state.counter - (state.counter * action.payload) / 100,
      };
    case ActionType.RES:
      return {
        counter: 0,
      };
  }
  return state;
};

const store = createStore(reducer);
export default store;
