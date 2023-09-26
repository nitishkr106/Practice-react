import React from "react";
import { useRef, useState } from "react";

function UseRef() {
  const refElemnt = useRef("");
  const [name, setName] = useState("nitish");
  const HandleReset = () => {
    setName("");
    refElemnt.current.focus();
  };
  const handleInput = () => {
    refElemnt.current.style.color = "red";
  };
  return (
    <div>
      <hr />
      <h1>USE REF EXAMPLE</h1>
      <input
        ref={refElemnt}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={HandleReset}>Reset</button>
      <button onClick={handleInput}>changecolour</button>
    </div>
  );
}

export default UseRef;
