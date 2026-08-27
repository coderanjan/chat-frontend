import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import {io, Socket} from 'socket.io-client'
import { useEffect } from "react";
import Login from './components/Login'
import Register from './components/Register'


const socket = io(import.meta.env.VITE_SOCKET_URL)




const App = () => {
  const [messages,setMessages]=useState([])
  const [totalusers,setTotalUsers]=useState(0)
  const [totalMessages,setTotalMessages]=useState(0)
  const[isLoggedIn,setIsLoggedIn]=useState(!!localStorage.getItem('token'))
  const [showRegister,setShowRegister]=useState(false)
  const [username,setUsername]=useState(null)

  useEffect(()=>{
    if(!username) return
    const handleMessage = (message)=>{

      
      const newMessage={
        id:message.id,
        user:message.user,
        text:message.text,
        isOwn:message.user === username
      }

      setMessages((prevMessages)=>[
        ...prevMessages,newMessage
      ])

      
    }

    const handleUserJoin=(username)=>{
     const newMessage = {
      id:Date.now(),
      type:'system',
      text:`${username} joined the chat`,
     }

     setMessages((prevMessages)=>[
      ...prevMessages,
      newMessage
     ])

      
    }

    const handleUserLeft=(username)=>{
      const newMessage={
        id:Date.now(),
        type:'system',
        text:`${username} left the chat`,
        
      }

      setMessages((prevMessages)=>[
        ...prevMessages,newMessage
      ])
      

    }
      socket.on('user-left',handleUserLeft)
      socket.on('user-join',handleUserJoin)
      socket.emit('user-join',username)
      socket.on('message',handleMessage)

      return()=>{
        socket.off('message',handleMessage)
        socket.off('user-join',handleUserJoin)
        socket.off('user-left',handleUserLeft)
      }
      
    
  },[username])

  useEffect(()=>{
    if (!username) return;
    const fetchMessages = async ()=>{
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/messages`,
          {
            headers:{
              Authorization : `Bearer ${token}`
            }
          }
        )

        const data= await response.json()

        setMessages(
          data.messages.map((message)=>(
            {
              id:message._id,
              user:message.user,
              text:message.text,
              isOwn:message.user === username
            }
          ))
        )
      } catch (error) {
        console.log('Faoled to load messages:',error);
        
      }
    }
    fetchMessages()
  },[username])

  useEffect(()=>{
    const fetchStats= async ()=>{
      try {
        const token = localStorage.getItem('token')

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/stats`,
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        )

        const data=await response.json()
        setTotalUsers(data.totalUsers)
        setTotalMessages(data.totalMessages)
      } catch (error) {
          console.log("Failed to load stats:",error);
          
      }
    }
    fetchStats()
  },[username])

  useEffect(()=>{
    const fetchCurrentUser = async ()=>{
      try {
        const token=localStorage.getItem('token')
        if(!token) return

        const response= await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/me`,
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        )

        const data = await response.json()
        if(!response.ok){
          console.log(data.message);
          return
        }
        setUsername(data.user.name)
      } catch (error) {
        console.log("Failed to get current user",error);
        
      }
    }
    fetchCurrentUser()
  },[])
  const handleSend=(text)=>{
      socket.emit('message',{
        user:username,
        text:text
      })
  }

  if(!isLoggedIn){
    return(
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        { showRegister?(
          <Register onRegister={()=>setShowRegister(false)}/>
        ):(
          <Login onLogin={()=>setIsLoggedIn(true)}/>
        )
  
        }

        <button onClick={()=>setShowRegister(!showRegister)} className="ml-4 text-sm text-blue-600">{
          showRegister? "Already have an account? Login": "Don't have an account? Register"
          }</button>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[600px] bg-white rounded-xl shadow-lg grid grid-rows-[auto_1fr_auto]">
        <ChatHeader 
          totalusers={totalusers}
          totalMessages={totalMessages}
        />
        <MessageList messages={messages} />
        <MessageInput onSend={handleSend}/>
        
      </div>
    </div>
   
  );
};

export default App;
