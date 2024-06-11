import React, { useContext} from "react";
import remove from '../myimg/cart_cross_icon.png'
import { ShopContext } from "../mycontext/ShopContext";
import './cartitem.css'

function CartItems() {
 const {all_product, cartItems, deletToCart, getTotalAmount} = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartHeading">
        <h1>Product</h1>
        <h1>Title</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
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
            <div className="processtoby">
            <p>Seb total</p><p>${getTotalAmount()}</p>
            </div>
            <div className="processtoby">
            <p>Delevery charge</p><p>$0</p>
            </div>
            <div className="processtoby">
            <p>Total</p><p>${getTotalAmount()}</p>
            </div>
        </div>
        <div className="rightpage">
            <p>If you have promo code, enter it here</p>
            <div className="offercupon">
            <input type="text" name="promo" placeholder="Enter promo code" />
            <button>Apply</button>
            </div>
            <button id="forbuy">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
