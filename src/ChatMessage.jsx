import React from 'react' 
import { FaUserTie } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import ReactMarkdown from 'react-markdown'

function ChatMessage({ sender, message }) {
  return (
    <div 
      className={
        sender === 'User B' 
          ? 'chat-message-userb' 
          : 'chat-message-usera'
      }
    >
      {sender === 'User B' && <RiRobot3Fill className='chat-message-profile' />}
      
      <div className='message'>
        {message === "loading..." && sender === "User B" ? (
          <span className="typing">
            <span></span>
            <span></span>
            <span></span>
          </span>
        ) : (
          <ReactMarkdown>
            {message}
          </ReactMarkdown>
        )}
      </div>

      {sender === 'User A' && <FaUserTie className='chat-message-profile' /> }
    </div>
  )
}

export default ChatMessage;
