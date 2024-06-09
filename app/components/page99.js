import React, { useEffect, useState } from "react";

const Page99 = () => {
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
  return (
    <div
      className={`  ${
        scrollY > 4500 ? "bg-white" : "bg-[#101010]"
      }  font-Arg text-center pb-[15rem] hidden lg:block w-[36%] xl:mt-[100vh] xl:pr-[5.3vw]  duration-1000`}
    >
      <div className=" text-left">
        <div className="text-[37.5px] xl:text-[25px] font-style font-bold text-white font-Avant  leading-[2.3rem] xl:leading-[3rem]  xl:pr-[1.2vw]">
          Unleash Your Technological Potential
        </div>
        <div className=" font-Matter font-medium  text-[#D1D1D1] text-[10.8px] xl:text-[16px] py-[2rem] xl:pb-[9rem] leading-[1.3rem] xl:pr-[0vw] ">
          Welcome to a hub of innovation and learning! Our website is designed
          to ignite your curiosity and guide you through the fascinating world
          of technology. Whether you're a beginner eager to learn the basics or
          an advanced student looking to deepen your expertise, we have
          something for you. Dive into our comprehensive resources on
          cutting-edge technologies like Artificial Intelligence, Blockchain,
          and Cybersecurity.
        </div>
        <div className="xl:h-[68vh] overflow-hidden rounded-md">
          <img className="my-12 xl:hidden" src="/images/pink.png" alt="" />
          <img className="hidden xl:block" src="/images/pink2.png" alt="" />
        </div>
        <div className=" font-Book text-[10.799px] xl:text-[12px] xl:pt-[7rem]">
          <div className=" font-Ava text-white  font-style text-[39px] xl:text-[25px] font-bold">
            Embark on a Journey of Tech Exploration with DiscoverTech"
          </div>
          <div className="text-[#D1D1D1] font-Matter font-medium text-base leading-[1.3rem] py-4">
            DiscoverTech is your compass through the ever-evolving landscape of
            projects and technologies. We curate an array of insightful
            resources, guiding you towards innovative projects and cutting-edge
            technologies. Whether you're a seasoned developer or just embarking
            on your coding journey, ExploreTech is your trusted companion in
            navigating the dynamic world of tech projects and advancements.
            Begin your exploration today and embark on a journey of continuous
            learning and growth with DiscoverTech.
          </div>
          <div className="xl:h-[68vh] overflow-hidden rounded-md">
            <img className="my-12 xl:hidden" src="/images/pink.png" alt="" />
            <img className="hidden xl:block" src="/images/pink.png" alt="" />
          </div>
        </div>

        <div className="max-h-[450px] max-w-[342.5px]  xl:min-h-[38vh] xl:min-w-full overflow-hidden"></div>
        <div className="  text-[#b6a1de] text-[11px] xl:text-[12.5px]">
          <div className=" font-Avant text-white fontstyle leading-[4rem] text-[39px] xl:text-[56px] font-black pb-4 xl:pt-[3rem]">
            STAY CONNECTED
          </div>
          <div className="   text-[#bdbdbd] leading-[0.8rem]">
            FOR VERY OCCASIONAL AND UNPREDICTABLE NUGGETS OF USEFUL AND USELESS
            INFORMATION (IN EQUAL MEASURE), PLEASE FEEL FREE TO FOLLOW MY SOCIAL
            CHANNELS:
          </div>
          <div className="flex justify-between pt-4 text-[#bdbdbd] xl:pt-[3rem]">
            <div>INSTAGRAM</div>
            <div>@PROFUSION</div>
          </div>
          <div className="h-[0.8px] w-full bg-[#484848] my-[0.4rem]"></div>
          <div className="flex justify-between  text-[#bdbdbd] ">
            <div>TWITTER</div>
            <div>/PROFUSION</div>
          </div>
          <div className="h-[0.8px] w-full bg-[#484848] my-[0.4rem]"></div>
          <div className="flex justify-between  text-[#bdbdbd]">
            <div>LINKEDIN</div>
            <div>/PROFUSION</div>
          </div>
          <div className="h-[0.8px] w-full bg-[#484848] my-[0.4rem] "></div>
          <div className=" flex justify-between  text-[#bdbdbd] ">
            <div>FACEBOOK</div>
            <div>/PROFUSION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page99;
