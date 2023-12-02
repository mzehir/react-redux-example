import React from "react";

import Description from "./sections/Description";
import MathematicalOperations from "./sections/MathematicalOperations";
import MathematicalOperationResult from "./sections/MathematicalOperationResult";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Description />

      <Content />
    </div>
  );
}

export default App;

function Content() {
  return (
    <div className="App-content">
      <MathematicalOperationResult />

      <MathematicalOperations />
    </div>
  );
}