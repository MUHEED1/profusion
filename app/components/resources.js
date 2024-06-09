import React from "react";
import pic from "@/public/images/code2.png";
import Image from "next/image";

const Resources = () => {
  return (
    <div className="bg-[#111111] pb-52">
      <div className="flex flex-row-reverse gap-28 pt-10 px-[3rem]">
        <div>
          <div className="text-[40px] font-Avant fontstyle font-bold text-[#FFFFFF] pt-16 w-[80%] ">
            GET ALL YOUR RESOURCES HERE
          </div>
          <div className="text-[#D0D0D0] text-[1rem] font-medium font-Matter pt-4 w-[590px]">
            The Personal Task Manager is a user-friendly web application
            designed to simplify task organization and management. Users can
            effortlessly create, view, update, and delete tasks, with features
            including detailed task descriptions, priority levels, deadlines,
            and categories. This centralized platform enhances productivity and
            organization, allowing users to stay on top of their tasks and
            deadlines efficiently, whether for personal or professional use.
            Click the link below.
          </div>

          <div className="text-[#B6A1DE] font-normal font-Matter text-[1rem] pt-4">
            Personal Task Manager GitHub Repo
          </div>
        </div>
        <div>
          <Image src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Resources;
