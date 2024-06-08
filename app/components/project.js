import Padding from "@/app/components/padding";
import React from "react";

const Project = () => {
  return (
    <div className="pt-[14rem] ">
      <Padding>
        <div className=" flex gap-[2rem] ">
          <div className=" font-Avant text-[2rem]  font-bold w-[26%] leading-[3.3rem]">
            Astronomically good projects & inspiration. Only the best of the
            best.
          </div>
          <div className="w-[70%] flex ">
            <div className="w-[60%]">
              <div className="h-[200px]"></div>
              <div className=" bg-slate-700 h-[300px]"></div>
            </div>
            <div className="w-[40%] bg-white flex flex-col gap-2">
              <div className="h-[250px] bg-zinc-600"></div>
              <div className="h-[250px] bg-zinc-600"></div>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Project;
