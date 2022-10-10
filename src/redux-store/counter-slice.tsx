import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateType } from "../store/types/store.type";

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state: stateType, action: PayloadAction<number>) {
      state.counter = state.counter + action.payload;
    },
    decrement(state: stateType, action: PayloadAction<number>) {
      state.counter = state.counter - action.payload;
    },
    reset(state: stateType) {
      state.counter = 0;
    },
  },
});
export const counterActions = counterSlice.actions; // counterSlice.action return an action object of this shape : {type: 'some auto-generate und uniq}

export default counterSlice.reducer;
