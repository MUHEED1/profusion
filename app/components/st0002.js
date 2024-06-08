"use client";

import React, { useEffect, useState } from "react";

const St0002 = () => {
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
  const [isMobile, setIsMobile] = useState(0);
  const [isTab, setIsTab] = useState(0);
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

  useEffect(() => {
    if (scrollY > 2700) {
      setPas(true);
    }
    if (scrollY > 2730) {
      setPas2(true);
    }
    if (scrollY > 3220) {
      setPas3(true);
    }
    if (scrollY > 3330) {
      setPas4(true);
    }
    if (scrollY > 3400) {
      setPas5(true);
    }
    if (scrollY > 2300) {
      setPas(true);
    }
  }, [scrollY]);

  return (
    <div className="px-6 xl:px-16 bg-white pt-40 ">
      <div className="flex py-[2rem] pt-20  ">
        <div className="w-[7px] h-[7px]   bg-black rounded-full mt-[12px] mr-[6px] "></div>
        <div className="font-medium xl:text-xl xl:font-normal ">ST/02</div>
        <div className="font-medium pl-[9rem] lg:pl-[7rem] xl:pl-[12.5rem] xl:text-xl xl:font-normal">
          What we belief in{" "}
        </div>
      </div>
      <div
        className={`py-8 lg:hidden text-[2rem] ${
          scrollY > 1900 ? "text-black" : "text-[#B8BEBE]"
        }`}
      >
        DiscoverTech is your compass through the ever-evolving landscape of
        projects and technologies.
      </div>

      <div
        className={`${pas ? " duration-500 text-black" : " text-[#B8BEBE]"} ${
          scrollY > 2300 ? "md:text-black" : "md:text-[#B8BEBE]"
        }`}
      >
        DiscoverTech is your compass{" "}
      </div>
      <div className="flex">
        <div
          className={`${
            scrollY > 2700 || pas
              ? "text-black duration-500"
              : " text-[#B8BEBE]"
          } ${scrollY > 2300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
        >
          through the{" "}
        </div>
        <div>
          <img className="hidden"></img>
          <div
            className={`${
              pas ? " duration-500 text-black" : " text-[#B8BEBE]"
            } ${scrollY > 2300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
          >
            We believe in the power of{" "}
          </div>
          <div className="flex">
            <div
              className={`${
                scrollY > 2700 || pas
                  ? "text-black duration-500"
                  : " text-[#B8BEBE]"
              } ${scrollY > 2300 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
            >
              ever-evolving landscape of{" "}
            </div>
            <div>
              <img
                className={`hidden ml-1 xl:mt-3 lg:block w-[ck duration-500]" : " text-[#B8BEBE]"} ${
                  scrollY > 2300 ? "md:text-black" : "md:text-[#B8BEBE]"
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
                scrollY > 2730 || pas2
                  ? "text-black duration-500"
                  : " text-[#B8BEBE]"
              } ${scrollY > 2340 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
            >
              {" "}
              projects and{" "}
            </div>
          </div>
          <div
            className={`${
              scrollY > 2730 || pas2
                ? "text-black duration-500"
                : " text-[#B8BEBE]"
            } ${scrollY > 2340 ? "md:text-black" : "md:text-[#B8BEBE]"}`}
          >
            technologies.
          </div>
        </div>
      </div>

      {/* //small */}

      <div className="py-8 text-[2rem] lg:hidden">
        <div className={`${scrollY > 2050 ? "text-black" : "text-[#B8BEBE]"}`}>
          Cultivating an{" "}
        </div>
        <div className={`${scrollY > 2100 ? "text-black" : "text-[#B8BEBE]"}`}>
          environment where
        </div>
        <div className="flex">
          <div
            className={`mx-2 ${
              scrollY > 2150
                ? "rotate-[6deg] border border-black rounded-full px-5 text-black"
                : "text-[#B8BEBE]"
            } `}
          >
            empathy{" "}
          </div>
          <div
            className={`${scrollY > 2200 ? "text-black" : "text-[#B8BEBE]"}`}
          >
            {" "}
            and{" "}
          </div>
        </div>
        <div className={`${scrollY > 2250 ? "text-black" : "text-[#B8BEBE]"}`}>
          understanding thrive.
        </div>
      </div>
      {/* //lg */}
      <div className="hidden lg:block text-[4rem] py-20 xl:hidden xl:border-b xl:border-black xl:text-8xl">
        <div className="text-base">02</div>
        <div>
          <div
            className={` ${
              scrollY > 2640 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            We curate an array of
          </div>
          <div className="flex">
            <div
              className={` mx-2 ${
                scrollY > 2700
                  ? " rotate-[6deg] border border-black rounded-full px-5 md:text-black"
                  : "md:text-[#B8BEBE]"
              } `}
            >
              insightful{" "}
            </div>
            <div
              className={` ${
                scrollY > 2700 ? "md:text-black" : "md:text-[#B8BEBE]"
              }`}
            >
              {" "}
              resources, guiding you towards
            </div>
          </div>
          <div
            className={` ${
              scrollY > 2700 ? "md:text-black" : "md:text-[#B8BEBE]"
            }`}
          >
            innovative projects and cutting-edge technologies.
          </div>
        </div>
      </div>
      {/* //small   bg */}
      <div className="hidden  py-20 xl:flex xl:border-b xl:border-black xl:text-8xl xl:gap-[14rem] xl:leading-[7.2rem]">
        <div className="text-base">02</div>
        <div>
          <div
            className={`${
              scrollY > 3220 || pas3
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
            } ${scrollY > 2340 ? "md:text-black" : "md:text-[#B8BEBE]"} `}
          >
            We curate an
          </div>
          <div className="flex">
            <div
              className={`${
                scrollY > 3330 || pas4
                  ? " duration-500 text-black"
                  : " text-[#B8BEBE]"
              }`}
            >
              {" "}
              array of{" "}
            </div>
            <div
              className={` mx-2  pt-0  ${
                scrollY > 3330 || pas4
                  ? "rotate-[6deg] border border-black rounded-full px-5 duration-500 text-black"
                  : " text-[#B8BEBE]"
              }`}
            >
              {" "}
              insightful{" "}
            </div>
            <div
              className={`${
                scrollY > 3330 || pas4
                  ? " duration-500 text-black"
                  : " text-[#B8BEBE]"
              }`}
            >
              {" "}
              resources, guiding you towards{" "}
            </div>
          </div>
          <div
            className={`${
              scrollY > 3400 || pas5
                ? " duration-500 text-black"
                : " text-[#B8BEBE]"
            }`}
          >
            {" "}
            innovative projects and cutting-edge technologies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default St0002;
