import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../slices/counter";

function Increment() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment state</button>
    </div>
  );
}

export default Increment;
