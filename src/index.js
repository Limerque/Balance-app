import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Balance from "./balance";

ReactDOM.render(
  <Provider store={store}>
    <Balance />
  </Provider>,
  document.getElementById("root")
);
