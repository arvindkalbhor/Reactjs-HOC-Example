import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import OnMouseHoverCounter from "./OnMouseHoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <OnMouseHoverCounter />
    </div>
  );
}

export default App;
