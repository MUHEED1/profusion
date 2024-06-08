"use client"
import Link from "next/link";
import React, { useRef } from "react";
import {motion,useInView} from "framer-motion"

const Navbar = () => {
  const ref=useRef()
  const inview=useInView(ref,{once:true})
  return (
    <div className="flex justify-between  px-[3rem] py-[1rem] fixed w-[100vw] z-[10] top-0 items-center">
      <div className=" font-Avant fontstyle leading-none flex justify-center items-center text-[1.5rem] font-bold text-[#FFFFFF]">
        PROFUSION
      </div>
      <motion.div ref={ref}
      initial={{scaleX:0}}
      animate={{scaleX: inview ? 1:0}}
      transition={{duration:1}}
       className="rounded-[999px] overflow-hidden bg-[#00000033] px-[2.5rem] py-[1rem] flex justify-between gap-[5rem]">
        <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
          Home
        </div>
        <Link href={"/project"}>
          <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
            Explore
          </div>
        </Link>
        <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
          About
        </div>
      </motion.div>
      <div className="rounded-full bg-[black]  px-[3rem] py-[1rem]   font-Matter flex justify-center  items-center  ">
        <div className=""> Blogs</div>
      </div>
    </div>
  );
};

export default Navbar;
