import React, { createContext, useState } from "react";
import { all_products } from "../assets/data";
// import Product from "../pages/Product";

export const ShopContext = createContext(null);

const ShopContextProVider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] === 1) {
            const newCartItems = { ...cartItems };
            delete newCartItems[itemId];
            setCartItems(newCartItems);
        } else if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));
        }
    };

    const getTotalCartItems = ()=>{
        let totalItems = 0
        for(const item in cartItems){
            totalItems += cartItems[item]
        }
        return totalItems
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((Product)=>Product._id === item)
                TotalAmount += itemInfo.price * cartItems[item]
            }
        }
        return TotalAmount
    }

    const contextValue = { all_products, cartItems, setCartItems, getTotalCartAmount,
                            addToCart, removeFromCart, getTotalCartItems }

    return(
       <ShopContext.Provider value={contextValue}>
            {props.children}
       </ShopContext.Provider>
    )
}
export default ShopContextProVider;