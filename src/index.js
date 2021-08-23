import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
//import AppClass from "./components/AppClass";
//import AppOld from './components/AppOld';
import reportWebVitals from "./js/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppClass/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
