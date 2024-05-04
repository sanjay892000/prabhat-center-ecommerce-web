import React from "react";
import './newsletter.css'
function NewsLetter() {
  return (
    <div className="main-letter-page">
      <div className="my-letter">
          <h1>Get exclusive offer on Your Email</h1>
          <h2>Subscribe to our newletter to update new Product</h2>
          <div className="input-email">
            <input type="text" name="email" placeholder="Eter your email" />
            <button>Subscribe</button>
          </div>
      </div>
    </div>
  );
}

export default NewsLetter;
