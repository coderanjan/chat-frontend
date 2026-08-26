import React from 'react'
import Message from './Message'


const MessageList = ({messages}) => {
  return (
    <div className='min-h-0  overflow-y-auto p-6'>
      {
        messages.map((message)=>(
          <Message
            key={message.id}
            user={message.user}
            text={message.text}
            isOwn={message.isOwn}
            type={message.type}
          />
        ))
      }
    </div>
  )
}

export default MessageList
