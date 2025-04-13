"use client";
import Image from "next/image";
import React from "react";
import { useState,useEffect} from "react";
import ProductCard from "./components/ProductCard";


export default function Home() {
  const [products,setProducts]=useState([]); //global variable
  //Constructor to automatically load the data
  useEffect(() => {
    getData();
    async function getData(){
      await fetch("/api/products",
        {method:"GET"}).then((res)=>res.json()).then((data)=>{
          setProducts(data);
        })
    }
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="bg-blue-200">
      <nav className="flex flex-row justify-around p-5">
        <img className= 'w-[100px]' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
        <div className="flex flex-row">
          <input className="w-[500px] border shadow rounded-md text-red-700 bg-gray-400" type="text" placeholder="Search for products, brands and more" />
          <button className="px-6 bg-blue-400 rounded-2xl">Search</button>
        </div>
          <button className="bg-blue-400 rounded">Home</button>
          <button className="bg-blue-400 rounded">Support</button>
          <a href="/logins" className="bg-blue-400 rounded" >Login</a>        
      </nav>
      <div className="flex flex-col">
          <img src="abd.webp"/>
          <div className="grid grid-cols-4 p-5 gap-5">
            {
              products.map((product,index)=>{
                return(
                  <ProductCard title={product.title}
                   description={product.Desc} 
                   price={product.price} 
                   img={product.img}
                    key={product.id} />
                )
              })
            }
      </div>
    </div>
    </div>
  );
}
