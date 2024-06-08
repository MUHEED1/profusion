import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between  p-[2.5rem] fixed w-[100vw] z-[10] top-0 items-center">
      <div className=" font-Avant text-[1.5rem] font-bold text-[#FFFFFF]">
        PROFUSION
      </div>
      <div className="rounded-[999px] bg-[#00000033] px-[2.5rem] py-[1.5rem] flex justify-between gap-[5rem]">
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
      </div>
      <div className="rounded-full bg-[black]  px-[3rem] py-[1.3rem]   font-Matter flex justify-center  items-center  ">
        <div className=""> Blogs</div>
      </div>
    </div>
  );
};

export default Navbar;
