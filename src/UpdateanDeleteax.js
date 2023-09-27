import React, { useState } from "react";
import axios from "axios";
const UpdateanDeleteax = () => {
  const data = { fname: "", lastname: "" };
  const [inputData, setInputData] = useState(data);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((response) => {
        console.log(response);
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <hr />

      <h1>Post Data using Axios</h1>
      <h3>After clicking on submit data is being sent as seen on console</h3>
      <label>firstname</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      ></input>
      <br />
      <label>Lastname</label>
      <input
        type="text"
        name="lastname"
        value={inputData.lastname}
        onChange={handleData}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default UpdateanDeleteax;
