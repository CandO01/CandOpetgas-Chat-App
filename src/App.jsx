import React, { useState } from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import logo from './assets/logo.png'

function App() {

  const [chatsMessages, setChatsMessages] = useState([])

  return (
    <div className='app-container'>
      <div className="heading">
        <h1 className='chat-heading'>CandOpetgas.Dev Chat App</h1>
        <img className='logo' src={logo} alt="candopetgas logo" />
      </div>
     <ChatMessages
      chatsMessages={chatsMessages}
     />
     <ChatInput
      chatsMessages={chatsMessages}
      setChatsMessages={setChatsMessages}
     />
    </div>
  )
}

export default App