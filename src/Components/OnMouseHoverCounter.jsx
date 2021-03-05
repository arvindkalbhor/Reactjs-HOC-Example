import React from "react";
import withCounter from "./withCounter";

const OnMouseHoverCounter = ({ count, increamentCount }) => {
  return (
    <div
      style={{ backgroundColor: "grey" }}
      className="App"
      onMouseOver={increamentCount}
    >
      Hovered {count} times
    </div>
  );
};

export default withCounter(OnMouseHoverCounter, 2);
