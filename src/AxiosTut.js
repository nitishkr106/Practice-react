import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosTut = () => {
  const [userData, setData] = useState([]); // yeha array form me h bcz data arrray form mr h
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <hr />
      <h1>Axios</h1>
      <h3>Fetching data using API</h3>
      {userData.map((data) => {
        return <div>{data.name}</div>;
      })}
    </div>
  );
};

export default AxiosTut;
