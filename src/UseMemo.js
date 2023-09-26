import React, { useMemo, useState } from "react";

function UseMemo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState("100");

  // Define the multiply function
  const multiply = () => {
    console.log("********");
    return add * 10;
  };

  // Use useMemo to memoize the result of the multiply function
  const multiplication = useMemo(() => {
    return multiply();
  }, [add]);

  return (
    <div>
      <hr />
      <h1>use memo</h1>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}>addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>substraction</button>
      <span>{minus}</span>
    </div>
  );
}

export default UseMemo;
