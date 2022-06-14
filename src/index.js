import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Old version
// import { applyMiddleware } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
// const store = creaseStore(store, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
