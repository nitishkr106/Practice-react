import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseEffect from "./UseEffect";
import Fetch from "./fetch";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import CustomHook from "./CustomHook";
import CustomHook2 from "./CustomHook2";
import AxiosTut from "./AxiosTut";
import AxiosPost from "./AxiosPost";
import UpdateanDeleteax from "./UpdateanDeleteax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <UseEffect />
    <Fetch />
    <UseRef />
    <UseMemo />
    <UseReducer />
    <CustomHook />
    <CustomHook2 />
    <AxiosTut />
    <AxiosPost />
    <UpdateanDeleteax />
  </React.StrictMode>
);
