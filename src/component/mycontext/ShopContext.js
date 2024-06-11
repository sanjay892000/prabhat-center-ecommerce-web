import React, { createContext } from 'react'
import all_product from '../myimg/all_product'
import { useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart());

    const addToCart = (productid) => {
        setcartItems((e) => ({ ...e, [productid]: e[productid] + 1 }))
    }
    const deletToCart = (productid) => {
        setcartItems((e) => ({ ...e, [productid]: e[productid] - 1 }))
    }

    const getNumberOfItems = () => {
        let itemNo = 0;
        for (const item in cartItems) {
           if(cartItems[item]>0){
            itemNo += cartItems[item];
           }
        }
        return itemNo;
    }

    const getTotalAmount = () => {
        let totalAmount = null;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue = { all_product, cartItems, addToCart, deletToCart, getTotalAmount, getNumberOfItems };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;