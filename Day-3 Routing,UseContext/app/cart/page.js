"use client"
import React from 'react'
import { useContext } from 'react'
import { ecomContext } from '../contexts/EcomContext'
import ProductCard from '../components/ProductCard'
export default function Cart() {
    const { cart } = useContext(ecomContext)
  return (
    <div className='flex flex-row'>
        {cart.map((product,index)=> {
            return <ProductCard 
             title={product.title} 
             img={product.img}
             id={product.id}
             key={index}
              desc={product.desc}/>
        })}
    </div>
  )
}
