import React, { useContext } from "react";
import remove from '../myimg/cart_cross_icon.png'
import { ShopContext } from "../mycontext/ShopContext";
import './cartitem.css'

function CartItems() {
 const {all_product, cartItems, deletToCart} = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartHeading">
        <h1>Product</h1>
        <h1>Title</h1>
        <h1>Price</h1>
        <h1>Qantity</h1>
        <h1>Total</h1>
        <h1>Remove</h1>
      </div>
      <hr />
      <div className="cartItemsContainer">
        {all_product.map((item)=>{
            if(cartItems[item.id]>0){
            return <>
            <div className="cartElement">
            <div className="chileItem"><img src={item.image} alt="" /></div>
            <div className="chileItem"><p>{item.name}</p></div>
            <div className="chileItem"><p>${item.new_price}</p></div>
            <div className="chileItem"><p>{cartItems[item.id]}</p></div>
            <div className="chileItem"><p>${item.new_price * cartItems[item.id]}</p></div>
            <div className="chileItem"><img id="removeCart" src={remove} alt="loading..." onClick={(e)=>{
                deletToCart(item.id)}}/></div>
                </div>
                <hr />
                </>
            }
            else{
                return null;
            }
        })}
      </div>
      <div className="cartsubItem">
        <div className="leftpage">
            <h1>Cart Totals</h1>
            <p><span>Seb total</span> $150</p>
            <p><span>Delevery charge</span> $0</p>
            <p><span>Total</span> $452</p>
        </div>
        <div className="rightpage">
            <p>If you have promo code, Enter here</p>
            <input type="text" name="promo" placeholder="Enter promo code" />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
