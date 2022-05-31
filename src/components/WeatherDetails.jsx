import React from "react";
import WeatherInfo from "./WeatherInfo"
import "../styles.css";

function WeatherDetails() {
  return(
    <div className= "weather-details">
      <WeatherInfo title= "Humidity" info= "35%"/>
      <WeatherInfo title= "Wind Speed" info= "135 mph"/>
    </div>
  );
}

export default WeatherDetails;
