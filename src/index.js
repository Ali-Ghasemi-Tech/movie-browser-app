import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter ,Routes , Route } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  
    <BrowserRouter basename="movie-browser-app">
        <App />
    </BrowserRouter>,
  document.getElementById("root")
);