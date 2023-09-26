import React, { useState } from "react";

const useCustomHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
};
//YE FUNCTION H JISKO KHI BHI CALL KR SKTE HO JB BHI JARURT H....NO NEED TO CRETAE NEW ONE
export default useCustomHook;
