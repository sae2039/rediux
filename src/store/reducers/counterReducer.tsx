import { ActionType } from "../types/actionType";
import { counterReducerType } from "../types/store.type";
const initialState = 0;
const reducer = (
  state: number = initialState,
  action: counterReducerType
): number => {
  switch (action.type) {
    case ActionType.INC:
      return state + action.payload;
    case ActionType.DEC:
      return state + action.payload;
    case ActionType.RES:
      return 0;
  }
};

export default reducer;
