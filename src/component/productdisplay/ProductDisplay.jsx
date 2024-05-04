import React, { useContext } from "react";
import "./productDisplay.css";
import star from "../myimg/star_icon.png";
import dullStar from "../myimg/star_dull_icon.png";
import { ShopContext } from "../mycontext/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productDisplay-main">
      <div className="productDisplay">
        <div className="productdisplay-left">
          <div className="productDisplayImg-list">
            <img src={product.image} alt="loading..." />
            <img src={product.image} alt="loading..." />
            <img src={product.image} alt="loading..." />
            <img src={product.image} alt="loading..." />
          </div>
          <div className="productDisplayImg-main">
            <img src={product.image} alt="loading..." />
          </div>
        </div>
        <div className="productDisplay-right">
          <h1>{product.name}</h1>
          <div className="product-star">
            <img src={star} alt="loading..." />
            <img src={star} alt="loading..." />
            <img src={star} alt="loading..." />
            <img src={star} alt="loading..." />
            <img src={dullStar} alt="loading..." />
            <p>(3,045)</p>
          </div>
          <div className="product-price">
            <span>${product.new_price}</span>
            <span>${product.old_price}</span>
          </div>
          <div className="product-description">{product.description}</div>
            <h1>Select Your size</h1>
          <div className="product-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button className="addtocart" onClick={()=>{addToCart(product.id)}}>AAD TO CART</button>
          <div className="product-category-option">
            Category: <span> Mens, Womens, Kids, etc...</span>
          </div>
          <div className="product-category-tag">
            tag: <span> Modern, Latest</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
