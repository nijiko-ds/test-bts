import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formFilled: false,
};

export const formfilledSlice = createSlice({
  name: "formfilled",
  initialState,
  reducers: {
    setFormFilled: (state, action) => ({
      ...state,
      formFilled: action.payload,
    }),
  },
});

export const { setFormFilled } = formfilledSlice.actions;
export default formfilledSlice.reducer;
