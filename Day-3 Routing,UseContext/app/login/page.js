"use client"
import React from "react";
import {useState} from "react"
import {useRouter} from "next/navigation"
export default function Login(){
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        
       <div className="flex 
       flex-col min-h-screen
       w-full bg-blue-500 
        items-center justify-center">
         <div className="
         flex flex-col items-center justify-center
        bg-white w-[500px]
          h-[700px] shadow-lg rounded-lg">
                <img src="/logo.svg" 
                className="bg-red-300"/>

                <form onSubmit={(e)=> {
                    e.preventDefault()
                
                    alert(email)
                    alert(password)
                    router.push("/home")
                    
                }}>
                    <input
                    onChange={(event)=> {
                        setEmail(event.target.value)
                    }}
                    id="email" 
                    type="email"
                    placeholder="Enter Email"
                    className="p-3 w-full border m-3" />
                    <br />
                    <input 
                    onChange={(event)=> {
                        setPassword(event.target.value)
                    }}
                    id="password"
                    placeholder="Enter Password"
                     type="password"
                     className="p-3 w-full border m-3"
                    />
                    <br />
                    <button
                    id="login"
                    type="submit" 
                    className="bg-blue-500 rounded-full p-3
                     text-white">Login</button>
                </form>
         </div>
       </div>
    )
}