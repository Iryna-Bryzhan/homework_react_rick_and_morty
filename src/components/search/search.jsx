import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="container box">
      <div className="search">
        <input type="search" placeholder="???" />
      </div>
      <div className="cards"></div>
    </div>
  );
}
export default Search;
