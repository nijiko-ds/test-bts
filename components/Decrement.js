import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../slices/counter";
const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement state</button>
    </div>
  );
};

export default Decrement;
