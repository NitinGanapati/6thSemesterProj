import React from "react";

export default function Navbar(){
    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            alert("Login Successfull")
            router.push("/");
        }}>
        <div className="flex justify-center min-h-screen w-full flex-col items-center bg-amber-500">
            <div className="flex flex-col w-[400px] h-[600px] shadow-lg rounded-md bg-white justify-center items-center">
            <img className= 'w-[100px] mb-35 mr-15' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
            <div className="flex flex-col text-amber-300 w-[200px] h-[300px]">
            <input id="email" onChange={(event)=>{
                setEmail(event.target.value)
            }}
            className="text-cyan-500 p-5 border" type="text" placeholder="Enter your Email"></input>
            <input id="password" onChange={(event)=>{
                setPassword(event.target.value);
            }}
            type="text"className="p-5 border" placeholder="Enter the Password"></input>
            <button>Login</button>
            </div>
            </div>
        </div>
        </form>
        
        
        
        
        </>
        
    )
}