import React from "react";
import LeftGrid from "./LeftGrid";
import RightGrid from "./RightGrid";
import "../styles.css";

function App() {
  return (
    <div className="App grid-container">
      <LeftGrid />
      <RightGrid />
    </div>
  );
}

export default App;
