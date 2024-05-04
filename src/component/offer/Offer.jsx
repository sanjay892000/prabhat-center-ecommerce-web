import React from "react";
import "./offer.css";
import image from "../myimg/exclusive_image.png";

function Offer() {
  return (
    <div className="main-offer-page">
      <div className="my-offer">
        <div className="left-offer">
          <h1>Exclusive</h1>
          <h1>Offer for You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>check now</button>
        </div>
        <div className="right-offer">
          <img src={image} alt="loading..." />
        </div>
      </div>
    </div>
  );
}

export default Offer;
