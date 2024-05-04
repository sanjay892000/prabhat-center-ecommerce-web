import React from "react";
import "./hero.css";
import hand_img from "../myimg/hand_icon.png";
import home_img from "../myimg/hero_image.png";
function hero() {
  return (
    <div>
      <main className="main-page">
        <div className="left-side">
          <div className="left-hero">
            <h3>New Arrivals Only</h3>
            <div className="handing">
              <h1>new</h1>
              <img src={hand_img} alt="" />
            </div>
            <h1>collection</h1>
            <h1>for everyone</h1>
            <button className="latest-button">
              <span>Latest Collection</span>
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
        <div className="right-side">
          <img src={home_img} alt="Loadding..." />
        </div>
      </main>
    </div>
  );
}

export default hero;
