"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Navbar = () => {
  const ref = useRef();
  const inview = useInView(ref, { once: true });
  return (
    <div className="flex justify-between  px-[3rem] py-[1rem] fixed w-[100vw] z-[100000] top-0 items-center mix-blend-difference bg-transparent">
      <Link href={"/"}>
      <div  className=" font-Avant fontstyle leading-none flex justify-center items-center text-[1.5rem] font-bold text-[#FFFFFF]">
        PROFUSION
      </div>
      </Link>
      <motion.div
        ref={ref}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inview ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[999px] overflow-hidden bg-[#ffffff33] px-[2.5rem] py-[1rem] flex justify-between gap-[5rem]"
      >
      <Link href={"/"}>

        <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
          Home
        </div>
        </Link>
        <Link href={"/project"}>
          <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
            Explore
          </div>
        </Link>
        <div className=" font-Matter text-[#FFFFFF] text-[1rem] cursor-pointer">
          About
        </div>
      </motion.div>
      <div className="rounded-full bg-[#602cc1aa]  px-[3rem] py-[1rem]   font-Avant font-semibold fontstyle flex justify-center  items-center  ">
        <div className=""> Ask</div>
      </div>
    </div>
  );
};

export default Navbar;
