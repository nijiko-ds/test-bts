import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counter";
import formbtsReducer from "../slices/formbts";
import formFilledReducer from "../slices/formfilled";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formbts: formbtsReducer,
    formFilled: formFilledReducer,
  },
  devTools: true,
});
