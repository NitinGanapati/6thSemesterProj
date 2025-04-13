"use client";
import React from 'react';
import Navbar from './components/Navbar';
import { useState,useEffect } from 'react';
import ProductCard from './components/ProductCard';
export default function Home(){

  const [products,setProducts] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData(){
    await fetch('/api/products',
        {method:"GET"})
        .then((res)=> res.json())
        .then((data)=> {
           setProducts(data)
        })
  }
  

  return (
    <div>
      <Navbar />
      <div className='flex flex-col m-4'>
        <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a1417d7367e71581.jpeg?q=20'/>
        <div className='flex flex-row'>
          {
            products.map((product,index)=>  {
              return <ProductCard 
              id={product.id}
              title={product.title}
              desc={product.desc}
              img={product.image}
               key={index}/>
            })
          }
        </div>  
      </div>

    </div>
  )
}