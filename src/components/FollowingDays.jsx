import React from "react";
import NextDay from "./NextDay"
import "../styles.css";

function FollowingDays() {
  return(
    <div className= "following-days">
      <NextDay />
      <NextDay />
      <NextDay />
      <NextDay />
      <NextDay />
    </div>
  )
}

export default FollowingDays;
