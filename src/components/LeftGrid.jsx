import React from "react";
import DayTile from "./DayTile";
import WeatherDetails from "./WeatherDetails"
import SearchBar from "./SearchBar";
import "../styles.css";

function LeftGrid() {
  return (
    <div className="left-grid">
      <DayTile />
      <WeatherDetails />
      <SearchBar />
    </div>
  );
}

export default LeftGrid;
