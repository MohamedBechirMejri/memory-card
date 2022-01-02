import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
const gradient = document.querySelector(".gradient");

function onMouseMove(event) {
  gradient.style.backgroundImage =
    "radial-gradient(at " +
    event.clientX +
    "px " +
    event.clientY +
    "px, rgba(159,0,191,.9) 0, #4D4FA7 70%)";
}
document.addEventListener("mousemove", onMouseMove);
