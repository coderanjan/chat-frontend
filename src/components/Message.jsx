import React from 'react'

const Message = ({user,text,isOwn,type}) => {

  if(type === "system"){
    return(
      <div className='flex justify-center my-3'>
        <p className='text-xs text-gray-400 bg-gray-100 py-1 rounded-full'>{text}</p>
      </div>
    )
  }
  return (
    <div className={`flex ${isOwn ? "justify-end":"justify-start"} mb-4`}>
      <div>
        <p className='text-xs text-gray-500 mb-1 px-1'>{user}</p>
        <div className={`px-4 py-2 rounded-2xl shadow-sm ${isOwn
          ?'bg-blue-600 text-white rounded-br-md':
          'bg-gray-100 text-gray-800 rounded -bl-md'
        }`}>{text}</div>
      </div>
    </div>
  )
}

export default Message
