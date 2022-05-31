import React from "react";
import "../styles.css";

function WeatherInfo(props) {
  return(
    <div className= "weather-info">
    <p>{props.title}</p>
    <p>{props.info}</p>
    </div>
  )
}

export default WeatherInfo;
