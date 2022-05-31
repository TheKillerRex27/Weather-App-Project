import React from "react";
import "../styles.css";

function DayTile() {
  return(
    <div className="daytile">
      <img
        className="daytile-icon"
        src="https://media.istockphoto.com/vectors/cute-flat-sun-icon-vector-id1124567572?k=20&m=1124567572&s=612x612&w=0&h=qA2-ugQviG9uGvpn5-K90sK9w5QZjd3TetULc_5VECc="
        alt="weather-img"
      />
      <p className="daytile-text">Sunny</p>
      <p className="daytile-text">30°C</p>
    </div>
  )
}

export default DayTile;
