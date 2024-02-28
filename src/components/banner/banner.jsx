import React from "react";
import "./banner.css";
import rickAndMorty from "../../img/rick-and-morty.png";

function Banner() {
  return (
    <div className="container box">
      <div className="banner">
        <img src={rickAndMorty} alt="rick-and-morty" />
      </div>
    </div>
  );
}
export default Banner;
