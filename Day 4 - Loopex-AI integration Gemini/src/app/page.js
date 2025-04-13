"use client"

import Image from "next/image";
import {useRouter} from "next/navigation";
import { InfinityIcon } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24">
            <div className="text-10xl"> {/* Increased icon size */}
                <InfinityIcon />
            </div>
            <h2 className="text-4xl font-bold mt-4"> {/* Increased font size and added bold styling */}
                <p>Welcome to LOOPx</p>
            </h2>
            <p className="text-xl mt-2"> {/* Increased font size */}
                Your personal AI Assistant for learning new things
            </p>
            <button 
                className="bg-red-600 p-4 rounded-full text-white mt-8 text-lg" 
                onClick={(e) => { router.push('/chat') }}
            >
                Get Started
            </button>
        </div>
    );
}