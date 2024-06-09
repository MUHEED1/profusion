"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import pic from "@/public/images/pic.png"
import pic2 from "@/public/images/pic2.png"
import Marqueee from "./marquee";

const St0002 = () => {
  const ref = useRef()
  const [pas, setPas] = useState(false);
  const [pas2, setPas2] = useState(false);
  const [pas3, setPas3] = useState(false);
  const [pas4, setPas4] = useState(false);
  const [pas5, setPas5] = useState(false);
  const [pas6, setPas6] = useState(false);

  const [pas1, setPas1] = useState(false);
  const [pas12, setPas12] = useState(false);
  const [pas13, setPas13] = useState(false);
  const [pas14, setPas14] = useState(false);
  const [pas15, setPas15] = useState(false);
  const [pas21, setPas21] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {

      setScrollY(window.scrollY);

    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (scrollY > 700) {
  //     setPas(true);
  //   }
  //   if (scrollY > 730) {
  //     setPas2(true);
  //   }
  //   if (scrollY > 220) {
  //     setPas3(true);
  //   }
  //   if (scrollY > 330) {
  //     setPas4(true);
  //   }
  //   if (scrollY > 400) {
  //     setPas5(true);
  //   }
  //   if (scrollY > 300) {
  //     setPas(true);
  //   }
  // }, [scrollY]);

  return (
    <div ref={ref} className={` duration-1000  ${scrollY > 4500 ? "bg-white" : "bg-[#101010]"
      } `}>
      <div className="px-6 xl:px-16  py-40 flex gap-10 ">
        {/* <div
        className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
      >
        DiscoverTech{" "}
      </div>
      <div
        className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
      >
        {" "}
        is{" "}
      </div>{" "}
      <div
        className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
      >
        {" "}
        your{" "}
      </div>{" "}
      <div
        className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
      >
        {" "}
        compass
      </div>
      <div className="flex">
        <div
          className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
        >
          through{" "}
        </div>
        <div
          className={`${scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
        >
          the{" "}
        </div>
        <div>
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            We{" "}
          </div>
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            {" "}
            believe{" "}
          </div>
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            {" "}
            in{" "}
          </div>{" "}
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            {" "}
            the{" "}
          </div>{" "}
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            {" "}
            power{" "}
          </div>{" "}
          <div
            className={` ${
              scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            {" "}
            of{" "}
          </div>
          <div className="flex">
            <div
              className={`${
                scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
              }`}
            >
              ever-evolving {" "}
            </div>
            <div
              className={`${
                scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
              }`}
            >
              landscape {" "}
            </div>{" "}
            <div
              className={`${
                scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
              }`}
            >
            of{" "}
            </div>
            <div>
              <img
                className={`hidden ml-1 xl:mt-3 lg:block w-[ck duration-500]" : " text-[#B8BEBE]"} ${
                  scrollY > 300 ? "md:text-black" : "md:text-[#B8BEBE]"
                }`}
              />{" "}
              quality, direct{" "}
            </div>
            <div>
              <img
                className={`hidden ml-1 xl:mt-3 lg:block w-[90px] h-[90px]`}
                src="/images/logo.png"
                alt=""
              />{" "}
            </div>
            <div
              className={`${
                scrollY > 730 || pas2
                  ? "text-black duration-500"
                  : " text-[#B8BEBE]"
              } ${scrollY > 340 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
            >
              {" "}
              projects and{" "}
            </div>
          </div>
          <div
            className={`${
              scrollY > 730 || pas2
                ? "text-black duration-500"
                : " text-[#B8BEBE]"
            } ${scrollY > 340 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
          >
            technologies.
          </div>
        </div>
      </div> */}
        {/* //lg */}
        <div className="w-full h-full object-cover"><Image className=" h-full" width={700} height={500} src={pic} alt="" /></div>
        {/* <div className="hidden lg:block text-[1rem] py-20 xl:hidden  xl:text-3xl">

          <div>
            <div
              className={` ${scrollY > 2640 ? "md:text-black" : "md:text-[#B8BEBE]"
                }`}
            >
              We curate an array of
            </div>
            <div className="flex">
              <div
                className={` mx-2 ${scrollY > 2700
                  ? " rotate-[6deg] rounded-full px-5 md:text-black"
                  : "md:text-[#B8BEBE]"
                  } `}
              >
                insightful{" "}
              </div>
              <div
                className={` ${scrollY > 2700 ? "md:text-black" : "md:text-[#B8BEBE]"
                  }`}
              >
                {" "}
                resources, guiding you towards
              </div>
            </div>
            <div
              className={` ${scrollY > 2700 ? "md:text-black" : "md:text-[#B8BEBE]"
                }`}
            >
              innovative projects and cutting-edge technologies.
            </div>
          </div>
        </div> */}

        {/* //small   bg */}
        <div className="hidden  py-0 lg:block  lg:text-[2.275rem]  lg:leading-[2.9rem]">
          <div className=" flex flex-wrap gap-x-2 items-center  sp ">
            <div
              className={`${scrollY > 4700 ? "md:text-black" : "md:text-[#B8BEBE]"
                } `}
            >
              We{" "}
            </div>
            <div
              className={`${scrollY > 4720 ? "md:text-black" : "md:text-[#B8BEBE]"
                } `}
            >
              {" "}curate{" "}
            </div>
            <div
              className={`${scrollY > 4740 ? "md:text-black" : "md:text-[#B8BEBE]"
                } `}
            >
              {" "}an{" "}
            </div>

            <div
              className={`${scrollY > 4760
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              array{" "}
            </div>
            <div
              className={`${scrollY > 4780
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              of{" "}
            </div>
            <div
              className={`       ${scrollY > 4800
                ? "   duration-500   text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              insightful{" "}
            </div>
            <div
              className={`${scrollY > 4820
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              resources,{" "}
            </div>
            <div
              className={`${scrollY > 4840
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              guiding{" "}
            </div>
            <div
              className={`${scrollY > 4860
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              you{" "}
            </div>
            <div
              className={`${scrollY > 4880
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              towards{" "}
            </div>

            <div
              className={`${scrollY > 4900
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              innovative
            </div>
            <div
              className={`${scrollY > 4920
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              projects
            </div>{" "}
            <div
              className={`${scrollY > 4940
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              and
            </div>{" "}
            <div
              className={`${scrollY > 4960
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              cutting-edge
            </div>{" "}
            <div
              className={`${scrollY > 4980
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
                }`}
            >
              {" "}
              technologies.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-row-reverse  pb-40 w-full px-[3rem]">
        <div className="w-[45%]  min-h-full "><Image className="min-h-full min-w-full object-fit" src={pic2} alt="" /></div>
        <div className="flex flex-wrap w-[55%] pr-10  xl:text-[2.275rem]  xl:leading-[2.9rem] gap-x-4">
          <div
            className={`${scrollY > 5100
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >

            Our{" "}
          </div>
          <div
            className={`${scrollY > 5120
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            roadmap{" "}
          </div> <div
            className={`${scrollY > 5140
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            website{" "}
          </div> <div
            className={`${scrollY > 5160
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            curates{" "}
          </div> <div
            className={`${scrollY > 5180
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            insightful{" "}
          </div> <div
            className={`${scrollY > 5200
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            resources{" "}
          </div> <div
            className={`${scrollY > 5220
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            and{" "}
          </div> <div
            className={`${scrollY > 5240
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            showcases{" "}
          </div> <div
            className={`${scrollY > 5260
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            cutting-edge{" "}
          </div> <div
            className={`${scrollY > 5280
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            advancements{" "}
          </div> <div
            className={`${scrollY > 5300
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            like{" "}
          </div> <div
            className={`${scrollY > 5320
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            AI{" "}
          </div> <div
            className={`${scrollY > 5340
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            and{" "}
          </div>
          <div
            className={`${scrollY > 5360
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            3D{" "}
          </div>
          <div
            className={`${scrollY > 5380
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            printing.{" "}
          </div>  <div
            className={`${scrollY > 5400
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            Explore{" "}
          </div>  <div
            className={`${scrollY > 5420
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            groundbreaking{" "}
          </div>  <div
            className={`${scrollY > 5440
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            projects {" "}
          </div>  <div
            className={`${scrollY > 5460
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            and{" "}
          </div>  <div
            className={`${scrollY > 5480
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            navigate{" "}
          </div>  <div
            className={`${scrollY > 5500
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            the{" "}
          </div>  <div
            className={`${scrollY > 5520
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            exciting {" "}
          </div>  <div
            className={`${scrollY > 5540
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            potential{" "}
          </div>
          <div
            className={`${scrollY > 5560
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            of{" "}
          </div> <div
            className={`${scrollY > 5580
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            these{" "}
          </div> <div
            className={`${scrollY > 5600
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            technologies,{" "}
          </div> <div
            className={`${scrollY > 5620
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            fostering {" "}
          </div>
          <div
            className={`${scrollY > 5640
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            a{" "}
          </div><div
            className={`${scrollY > 5660
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            responsible{" "}
          </div><div
            className={`${scrollY > 5680
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            future {" "}
          </div><div
            className={`${scrollY > 5700
              ? " duration-500 text-black"
              : " text-[#B8BEBE]"
              }`}
          >
            {" "}
            together.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default St0002;
