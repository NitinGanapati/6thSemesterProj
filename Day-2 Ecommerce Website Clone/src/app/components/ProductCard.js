"use client";
import { useContext,useState } from "react"
import {ecomContext} from "../contexts/EcomContext"
import { useRouter } from "next/navigation";
export default function ProductCard(props){
    const router=useRouter();
    const {cart,addProductToCart}= useContext(ecomContext);
    return(
        <div className="w-[200px] h-[400px] bg-gray-100 rounded-md shadow-lg text-cyan-500 p-5 cursor-pointer ml-10">
            <img className="w-[100px] h-[100px]" src={props.img}/>
            <br/>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <div className="flex flex-row cursor-pointer">
            <button
            onClick={() => {
                addProductToCart({
                    title: props.title,
                    price: props.price,
                    desc: props.desc,
                    id: props.id
                });
                router.push("/cartso");
            }}
            className="bg-blue-500 text-white p-3 rounded"
        >
            Add to Cart
        </button>
            <button className="bg-red-500 text-white p-3 rounded">Favorite</button>

            </div>
            
            

        </div>
    )


}