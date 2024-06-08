import React from "react";
import Padding from "./padding";
import Plancard from "./plancard";
import Image from "next/image";
import src from "@/public/images/image7.jpg";

const Projectdetails = () => {
  return (
    <div className="pt-[14rem]">
      <Padding>
        <div className="flex gap-[4rem] ">
          <div className="w-[40%]">
            <div className="text-[24px] font-Avant fontstyle font-bold text-[#FFFFFF] pt-[1rem] up ">
              Python
            </div>
            <div className=" font-Matter text-[16px] font-[500] pt-[0.5rem] w-[93%]">
              Python is a versatile and user-friendly programming language known
              for its simplicity and readability. With a vast ecosystem of
              libraries and frameworks, Python empowers developers to tackle
              diverse tasks, from web development to data analysis and machine
              learning. Its clean syntax and strong community support make
              Python an ideal choice for beginners and seasoned professionals
              alike, fostering a culture of innovation and collaboration in the
              world of programming.
            </div>
          </div>
          <div className="rounded-[30px]">
            <Image src={src} className="w-full rounded-[30px]" />
          </div>
        </div>
        <div className="pt-[15rem] font-Avant font-bold fontstyle text-[40px] flex justify-center up ">
          Roadmap
        </div>
        <div className="flex justify-center pt-[0.4rem] pb-[8rem]">
          <div className="bg-[#9393934D] rounded-[999px] px-[0.7rem] py-[0.5rem] flex justify-center items-center w-[13%] ">
            <div className=" font-Matter text-[14px] text-[#E2E2E2] ">
              Python Windows V3.10.0
            </div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997"
                  stroke="#E2E2E2"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 ">
          <Plancard
            heading={"Beginner"}
            text1={"Basic Syntax and Variables"}
            text2={"Data Types and Data Structures"}
            text3={"Control Flow"}
            text4={"Functions"}
            text5={"Basic File Handling"}
          />
          <Plancard
            heading={"Beginner"}
            text1={"Basic Syntax and Variables"}
            text2={"Data Types and Data Structures"}
            text3={"Control Flow"}
            text4={"Functions"}
            text5={"Basic File Handling"}
          />
          <Plancard
            heading={"Beginner"}
            text1={"Basic Syntax and Variables"}
            text2={"Data Types and Data Structures"}
            text3={"Control Flow"}
            text4={"Functions"}
            text5={"Basic File Handling"}
          />
          <Plancard
            heading={"Beginner"}
            text1={"Basic Syntax and Variables"}
            text2={"Data Types and Data Structures"}
            text3={"Control Flow"}
            text4={"Functions"}
            text5={"Basic File Handling"}
          />
        </div>
      </Padding>
    </div>
  );
};

export default Projectdetails;
