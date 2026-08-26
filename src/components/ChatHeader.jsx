import React from 'react'

const ChatHeader = ({totalusers,totalMessages}) => {
  return (
    <div className='px-6 py-4 border-b bg-white'>
     <div className='flex items-center justify-between'>
      <div>
      <h1 className='text-xl font-semibold text-gray-800'>chat Application</h1>
      <p className='text-sm text-gray-500'>Live chat</p>
      </div>

      <div className='flex items-center gap-4 text-xs'>
        <span className='flex items-center gap-1 text-gray-500'><span className='w-2 h-2 bg-green-500 rounded-full'></span>{totalusers} online</span>

        <span className='text-gray-500'>{totalMessages} Messages</span>
      </div>
      </div>
    </div>
  )
}

export default ChatHeader
