import { ActionType } from "../types/actionType";
import { counterReducerType } from "../types/store.type";
// react toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state++;
    },
    decrement(state) {
      state--;
    },
    reset(state, action) {
      state = 0;
    },
  },
});

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
