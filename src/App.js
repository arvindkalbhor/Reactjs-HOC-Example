import React from "react";
import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import OnMouseHoverCounter from "./Components/OnMouseHoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <OnMouseHoverCounter />
    </div>
  );
}

export default App;
