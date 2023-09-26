import React from "react";
import useCustomHook from "./CustomHfunc";

const CustomHook = () => {
  const [count, Increment, Decrement] = useCustomHook();
  return (
    <div>
      <hr />
      <h1> Custom HOOK 1</h1>
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CustomHook;
