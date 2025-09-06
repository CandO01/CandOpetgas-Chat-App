import React, { useState } from 'react'

function ChatInput({ chatsMessages, setChatsMessages }) {
  const [inputText, setInputText] = useState('')

  function getTextFromInputField(e) {
    setInputText(e.target.value)
  }

  async function sendMessage(e) {
    e.preventDefault()
    try {
      // Add User A's message
      setChatsMessages([
        ...chatsMessages,
        {
          sender: 'User A',
          message: inputText,
          id: crypto.randomUUID()
        }
      ])

      // Add temporary "loading..." message for User B
      const loadingId = crypto.randomUUID()
      setChatsMessages(prevChat => [
        ...prevChat,
        {
          message: "loading...",
          sender: "User B",
          id: loadingId
        }
      ])

      // Fake typing effect: delay API call
      setTimeout(async () => {
        try {
          const response = await fetch('https://candopetgas-chatbot-server.onrender.com/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: inputText })
          })

          console.log('Response status:', response.status)
          const data = await response.json()
          console.log('Data from server:', data)

          // Replace the "loading..." message with real OpenAI reply
          setChatsMessages(prevChat =>
            prevChat.map(chat =>
              chat.id === loadingId
                ? { ...chat, message: data.reply }
                : chat
            )
          )
        } catch (err) {
          console.error('Error fetching from server:', err)
        }
      }, 2000) // 2 seconds delay

      setInputText('')
    } catch (err) {
      console.error('Error in retrieving', err)
    }
  }

  return (
    <>
      <form onSubmit={sendMessage} className="form-container">
        <input
          type="text"
          placeholder="Start your chat here"
          value={inputText}
          onChange={getTextFromInputField}
          className="chat-input"
        />
        <button className="send-button">Send</button>
      </form>
    </>
  )
}

export default ChatInput
