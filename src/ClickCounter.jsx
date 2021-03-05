import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ count, increamentCount }) => {
  return (
    <div className="App">
      <button onClick={increamentCount}>{count}</button>
    </div>
  );
};

export default withCounter(ClickCounter);
