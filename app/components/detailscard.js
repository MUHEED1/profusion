"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

const Detailscard = ({ src, lable, Heading, content }) => {
  const [isin,setisin]=useState()

  
  return (
    <motion.div
    animate={{scale:isin? 1.2:1}}
    transition={{duration:0.4,ease:"easeOut"}} 
    onMouseEnter={()=>setisin(true)} onMouseLeave={()=>setisin(false)} className="p-[0.7rem]   bg-[#ebe8e8]  rounded-2xl shadow-xl">
      <div className="w-[full] h-[230px]   mb-5">
        <Image src={src} className=" object-cover rounded-xl h-[230px]" />
      </div>
      <div className="text-[0.85rem] flex justify-center rounded-[999px] font-Matter bg-[#E1E1E1] p-[0.7rem] text-[#000000]  w-max ">
        {lable}
      </div>
      <div className=" text-[1.3rem] py-[0.5rem] text-[#000000] font-Matter font-semibold ">
        {" "}
        {Heading}
      </div>
      <div className="text-[grey] text-[0.9rem] pb-[1.5rem] font-Matter">
        {content}
      </div>
      <div className=" flex justify-between items-center">
        <div className="text-[#535353] font-Matter text-[0.89rem]">
          19.5K People Viewed
        </div>
        <div className="flex justify-center items-center gap-3 rounded-[999px] bg-[#000000] px-[1.3rem] py-[0.8rem]">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#FFFFFF] text-[1rem] font-Matter">View</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detailscard;
