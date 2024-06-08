"use client";
import Padding from "@/app/components/padding";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Detailscard from "./detailscard";
import Image from "next/image";
import img1 from "@/public/images/project1.jpg";
import img2 from "@/public/images/project2.jpg";
import img3 from "@/public/images/project3.jpg";
import img4 from "@/public/images/graph.jpg";
import img5 from "@/public/images/pirchart.jpg";
import img6 from "@/public/images/hobby.jpg";

const Project = () => {
  const [activeTab, setActiveTab] = useState(1);
  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="pt-[14rem] ">
      <Padding>
        <div className=" flex gap-[2rem] pb-[7rem] ">
          <div className=" font-Avant text-[2rem]  font-bold w-[30%] leading-[3.3rem] fontstyle up">
            Astronomically good projects & inspiration. Only the best of the
            best.
          </div>
          <div className="w-[70%] flex gap-4 ">
            <div className="w-[60%] flex flex-col gap-2">
              <div className="h-[200px]"></div>
              <div className="  h-[300px] ">
                <Image
                  src={img1}
                  className="rounded-[30px] object-cover h-[300px] w-[full]"
                />
              </div>
            </div>
            <div className="w-[40%]  flex flex-col gap-2">
              <div className="h-[250px]  ">
                <Image
                  src={img2}
                  className="rounded-[20px] object-cover h-[250px]"
                />
              </div>
              <div className="h-[250px]  ">
                <Image
                  src={img3}
                  className="rounded-[20px] object-cover h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`flex w-max rounded-full  font-medium px-2 py-1 items-center border bg-[#FFFFFF] border-[#F2F2F2] 
       `}
            style={{ marginLeft: "-0.5rem" }}
          >
            <div
              className={clsx(
                "  px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full  transition-all font-manrope font-semibold text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 1 ? "text-[#FFFFFF]" : "text-[#2E303A]"
              )}
              onClick={() => changeTab(1)}
            >
              {activeTab == 1 && (
                <motion.span
                  layoutId="tabs"
                  className={`  px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-black  
              bg-[#2E303A]    `}
                />
              )}
              <div className="flex">
                <div>All</div>
              </div>
            </div>

            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 2 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(2)}
            >
              {activeTab == 2 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Python</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 3 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(3)}
            >
              {activeTab == 3 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">C++</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 4 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(4)}
            >
              {activeTab == 4 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Java</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 5 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(5)}
            >
              {activeTab == 5 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">GO</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 6 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(6)}
            >
              {activeTab == 6 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Ruby</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 7 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(7)}
            >
              {activeTab == 7 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">C#</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 8 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(8)}
            >
              {activeTab == 8 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">IOT</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 9 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(9)}
            >
              {activeTab == 9 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Javascript</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 10 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(10)}
            >
              {activeTab == 10 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Swift</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 11 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(11)}
            >
              {activeTab == 11 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Rust</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 12 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(12)}
            >
              {activeTab == 12 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">SQL</div>
              </div>
            </div>
            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-manrope font-semibold  transition-all text-[1rem] md:text-[1.1rem] duration-1000",
                activeTab == 13 ? "text-[#FFFFFF]" : "text-[#252525]"
              )}
              onClick={() => changeTab(13)}
            >
              {activeTab == 13 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[#2E303A]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Angular</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-Avant fontstyle up font-bold text-[2rem] pt-[3rem] text-[#FFFFFF] ">
          {" "}
          Top picks
        </div>
        <div className="py-[1rem] grid grid-cols-4 gap-6">
          <Detailscard src={img5} />
          <Detailscard src={img4} />
          <Detailscard src={img6} />
          <Detailscard src={img6} />
        </div>
      </Padding>
    </div>
  );
};

export default Project;
