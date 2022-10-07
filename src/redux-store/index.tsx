import { createSlice, configureStore } from "@reduxjs/toolkit";

import { stateType } from "../store/types/store.type";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state: stateType, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state: stateType, action) {
      state.counter = state.counter - action.payload;
    },
    reset(state: stateType) {
      state.counter = 0;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer, // OR for many reducers //reducer: { counter: counterSlice.reducer },
});
export const counterActions = counterSlice.actions; // counterSlice.action return an action object of this shape : {type: 'some auto-generate und uniq}
export default store;
