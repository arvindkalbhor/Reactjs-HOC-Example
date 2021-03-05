import React from "react";
import withCounter from "./withCounter";

const OnMouseHoverCounter = ({ count, increamentCount }) => {
  return (
    <div className="App" onMouseOver={increamentCount}>
      Hovered {count} times
    </div>
  );
};

export default withCounter(OnMouseHoverCounter);
