import React from "react";
import Graph from "./Graph"
import FollowingDays from "./FollowingDays"
import "../styles.css";

function RightGrid() {
  return(
    <div className= "right-grid">
      <Graph />
      <FollowingDays />
    </div>
  )
}

export default RightGrid;
