import React from "react";
import useCustomHook from "./CustomHfunc";

const CustomHook2 = () => {
  const [count, Increment, Decrement] = useCustomHook();
  return (
    <div>
      <h3>Both are using same function named as CustomHfun.js</h3>
      <h1> Custom HOOK 2</h1>

      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CustomHook2;
