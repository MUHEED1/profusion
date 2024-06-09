// components/Chat.js
"use client"
import React, { useState } from 'react';
import talkWith from '../api/gpt';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Padding from './padding';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    setInput('');

    try {
      const data = await talkWith(input);
      const botMessage = { role: 'bot', content: data };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
}


  return (
    <div className="flex flex-col w-full pt-[5rem] pb-[3rem] font-Matter  mx-auto  rounded-lg overflow-hidden">
      <div className="flex-1 p-4 overflow-y-scroll  ">
        <div className='h-[75vh]'>

        {messages.map((msg, index) => (
            <div className={`flex ${msg.role==='user'? "justify-end":"justify-start"} `}>
            
            <div
            key={index}
            className={`py-3 px-6 my-2 rounded-full ${
                msg.role === 'user' ? ' border border-gray-200 w-max relative right-0 text-white text-right self-end' : 'bg-[#5f2cc1] w-max text-white self-start'
            }`}
            >
            {msg.content}
          </div>
          </div>
        ))}
        </div>
      </div>
      <div className="flex p-1 rounded-full border  w-[50rem] mx-auto border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-2 px-3 outline-none border-gray-300 text-white bg-black rounded-full mr-2"
        />
        <button
          onClick={sendMessage}
          className="py-2 px-5 bg-[#5f2cc1] text-white rounded-full"
        >
          Send
        </button>
      </div>
      <Padding className={"pt-[3rem] min-w-[60rem] max-w-[60rem] mx-auto"}>

      <Accordion className='text-[0.9rem]' >
      <AccordionItem className='border-b py-2 font-semibold border-b-gray-500' 
       key="1" aria-label="Accordion 1"  title="Start small">
        <div className=' font-normal '>

      Begin by implementing basic features like task creation and viewing before moving on to more complex functionalities.
        </div>
      </AccordionItem>
      <AccordionItem
      className='border-b py-2 font-semibold border-b-gray-500'
        
        
        title="Documentation"
        >
        <div className=' font-normal '>

        It's always better to read the Documentation and understand itself
        </div>
      </AccordionItem>
      <AccordionItem className='border-b py-2 font-semibold border-b-gray-500' title="Testing">
      <div className=' font-normal '>

        Always Thorougly test your project to make it seamless
        </div>
      </AccordionItem>
      <AccordionItem className='border-b py-2 font-semibold border-b-gray-500'   title="Set Goals">
      <div className=' font-normal '>

      Establish specific, measurable, achievable, relevant, and time-bound (SMART) goals for your project.
      </div>
      </AccordionItem>
      <AccordionItem className='border-b py-2 font-semibold border-b-gray-500'   title="Plan and Document">
      <div className=' font-normal '>

      Create a Project Plan: Outline the major phases, tasks, milestones, and deadlines.
Documentation: Maintain comprehensive documentation from the start, including requirements, design decisions, and code comments.
</div>
      </AccordionItem>
    </Accordion>
          </Padding>
    </div>
  );
};

export default Chat;
