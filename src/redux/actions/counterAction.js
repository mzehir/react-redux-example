import { counterSlice } from "../slices/counterSlice";

export const selectCount = (state) => state.counter.value;

export const { increment, decrement } = counterSlice.actions;
