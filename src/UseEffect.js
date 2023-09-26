import React, { useEffect, useState } from "react";

const UseEffect = () => {
  useEffect(() => {
    alert("We r in Use state");
  }, []);
  const [clicked, setClicked] = useState("");

  return (
    <div>
      <h1>use effect example ans use state too</h1>
      <button onClick={() => setClicked("Subscribe hua")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To clcik hua")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXoUT hua")}>DropXoUT</button>
      <h1>{clicked}</h1>
    </div>
  );
};

export default UseEffect;
