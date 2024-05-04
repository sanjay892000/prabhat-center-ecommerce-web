import React, { useContext } from "react";
import Item from "../item/item";
import "./style/shopcategory.css";
import dropdown from "../myimg/dropdown_icon.png";
import { ShopContext } from "../mycontext/ShopContext";

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  const totalProductNo = all_product.length;
  
  return (
    <div className="shopMain-page">
      <img src={props.banner} alt="loading.." />
      <div className="main-shop">
        <div className="top-banner">
          <p>
            <span>Showing 1-12</span> out of {totalProductNo} products
          </p>
          <p className="drop-downimg">
            Sort by <img src={dropdown} alt="loadign..." />
          </p>
        </div>
        <div className="shopcategory">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
