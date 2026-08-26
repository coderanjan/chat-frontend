import React, { useState } from 'react'

const MessageInput = ({onSend}) => {
  const [text,setText]=useState("")

  const handleSend = ()=>{
    if(!text.trim()) return

    onSend(text)

    setText("")
  }
  
  return (
    <div className='p-4 border-t flex gap-2 bg-white'>
      
      <input type="text" 
        value={text}
        placeholder='Type your message...'
        className='flex-1 border rounded-lg px-4 py-2 outline-none'
        onChange={(e)=> setText(e.target.value)}
      />
        <button onClick={handleSend}  className='bg-black text-white px-5 py-2 rounded-lg'>
            Send
        </button>
      
    </div>
  )
}

export default MessageInput
