import React from "react";
import "../styles.css";

function SearchBar() {
  return(
    <div className= "search-bar">
      <input className= "search-input" type= "text"/>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
