import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counter";
import formbtsReducer from "../slices/formbts";
export const store = configureStore({
  reducer: { counter: counterReducer, formbts: formbtsReducer },
  devTools: true,
});
