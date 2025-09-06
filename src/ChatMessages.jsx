import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

function ChatMessages({ chatsMessages }) { 
  const chatMessagesRef = useRef(null) 
  
  useEffect(()=>{
    const containerEl= chatMessagesRef.current;
    if(containerEl){
      containerEl.scrollTop = containerEl.scrollHeight
    }
  }, [chatsMessages])

  return (
    <div className='chat-messages-container'
    ref={chatMessagesRef}
    >
      {chatsMessages.map((chat)=>{
        return(
          <ChatMessage
          key={chat.id}
          sender={chat.sender}
          message={chat.message}
          />
        )
      })}
   </div>
  )
}

export default ChatMessages