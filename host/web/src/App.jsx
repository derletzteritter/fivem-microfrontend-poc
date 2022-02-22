import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Bank from 'bank/App';

const App = () => (
  <div className="container">
    <h1>Hello</h1>
    <Bank />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
