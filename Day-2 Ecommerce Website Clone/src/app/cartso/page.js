"use client";
import React from "react";
import { useContext } from "react";
import { ecomContext } from "../contexts/EcomContext";
import ProductCard from "../components/ProductCard";
export default function CartPage(){
    const {cart}=useContext(ecomContext);
    return(
        <div className="flex flex-row flex-wrap bg-amber-50">
            {cart.map((item,index)=>(<ProductCard key={index} title={item.title} 
            img={item.img}
            price={item.price} 
            desc={item.desc} />))}
        </div>
    )
}