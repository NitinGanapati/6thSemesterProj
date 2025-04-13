"use client";
import React, { useState } from 'react';
import { PencilIcon, FileIcon, ShareIcon, AlarmCheck, PlusIcon, MessageSquareIcon } from 'lucide-react';

export default function ChatPage() {
    const [conversations, setConversations] = useState([]);
    const [activeConvo, setActiveConvo] = useState(null);
    const [userQue, setUserQue] = useState("");

    async function getAIResponse(userInput) {
        const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models";
        const MODEL_NAME = "gemini-2.0-flash";
        const apiKey = "AIzaSyAX8Bl4U827g6qpEIHCuxULAhN52FI4mlY"; // Use environment variable
    
        try {
            const response = await fetch(
                `${GEMINI_API_URL}/${MODEL_NAME}:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: userInput }] }],
                    }),
                }
            );
    
            const data = await response.json();
            console.log("🔍 API Response:", data); // Log the full response to debug
    
            if (data?.candidates?.length > 0 && data.candidates[0]?.content?.parts?.length > 0) {
                let content = data.candidates[0].content.parts[0].text;
    
                setActiveConvo(prev => ({
                    ...prev,
                    messages: [...(prev?.messages || []), { role: "assistant", content: content }]
                }));
            } else {
                console.error("🚨 Error: No valid response from AI", data);
            }
        } catch (error) {
            console.error("🔥 API Error:", error);
        }
    }
    

    return (
        <div className='flex flex-row min-h-screen p-2'>
            {/* Sidebar */}
            <div className='flex flex-col w-[200px]'>
                <button 
                    className='flex flex-row text-white items-center justify-center bg-black p-2 rounded-md shadow' 
                    onClick={() => {
                        const newConvo = { title: 'Conversation', messages: [] };
                        setConversations([...conversations, newConvo]);
                        setActiveConvo(newConvo);
                    }}
                >
                    <PlusIcon />
                    <div> New Chat</div>
                </button>

                <hr />
                {conversations.map((convo, index) => (
                    <div  
                        key={index}
                        onClick={() => setActiveConvo(convo)}
                        className='flex flex-row bg-gray-200 m-2 p-2 shadow cursor-pointer'
                    >
                        <MessageSquareIcon width={20} className="mr-2" /> 
                        <div>{convo.title}</div>
                    </div>
                ))}
            </div>

            {/* Chat Section */}
            <div className='w-full flex flex-col min-h-screen'>
                {/* Navbar */}
                <nav className='flex flex-row p-3 font-bold text-[24px] items-center justify-between'>
                    <div className='flex flex-row'>
                        <h1 className='mr-2'>LOOPx</h1>
                        <PencilIcon className='m-2' />
                        <FileIcon className='m-2' />
                    </div>
                    <div className='flex flex-row'>
                        <ShareIcon />
                        <AlarmCheck />
                    </div>
                </nav>

                {/* Messages Display */}
                <div className='flex flex-col bg-gray-200 text-black p-4'>
                    {activeConvo?.messages?.map((message, i) => (
                        <div 
                            key={i} 
                            className={`p-2 my-2 max-w-[75%] ${
                                message.role === "user" ? "ml-auto bg-blue-300 text-right" : "mr-auto bg-gray-300 text-left"
                            } rounded-lg`}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>

                {/* Input Box */}
                <div className='flex flex-row items-center justify-center p-3'>
                    <input
                        type='text'
                        value={userQue}
                        onChange={(e) => setUserQue(e.target.value)}
                        placeholder='Type a message...'
                        className='w-[800px] h-[50px] border-2 rounded-full px-4'
                    />
                    <button 
                        className='bg-blue-500 text-white font-bold p-4 rounded-full ml-2' 
                        onClick={() => {
                            if (!userQue.trim()) return; // Prevent empty messages
                            
                            setActiveConvo(prev => ({
                                ...prev,
                                messages: [...(prev?.messages || []), { role: "user", content: userQue }]
                            }));

                            getAIResponse(userQue);
                            setUserQue(""); // Clear input field after sending
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
