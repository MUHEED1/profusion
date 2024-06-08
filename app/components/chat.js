// components/Chat.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('/api/chatgpt', { message: input });
      const replyMessage = { role: 'assistant', content: response.data.message };
      setMessages([...messages, newMessage, replyMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg ${
              msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 text-black rounded-lg mr-2"
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
