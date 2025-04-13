"use client";
import { createContext,useState } from "react";

export const ecomContext = createContext();

export function EcomContextProvider({children}) {
    //global varibles
    const [cart,setCart] = useState([]);
    const [favourites,setFavourites] = useState([]);

    function addProductToCart(product){
        setCart([...cart,product]);
    }
    
    function removeProductFromCart(product){
        setCart(cart.filter((item)=>item.id!==product.id));
    }
    return(
        <ecomContext.Provider 
        value={{cart,favourites,addProductToCart,removeProductFromCart}}>
            {children}
        </ecomContext.Provider>
    )

}