import React from "react";
import WeatherInfo from "./WeatherInfo"
import "../styles.css";

function NextDay() {
  return (
    <div className= "next-day">
      <img src= "https://img.icons8.com/ios/50/000000/clouds.png" alt= "placeholder" />
      <h3>Next Day</h3>
      <WeatherInfo info= "32°C" />
    </div>
  )
}

export default NextDay;
