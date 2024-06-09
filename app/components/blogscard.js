import React from "react";
import clsx from "clsx";
import Image from "next/image";

const Blogscard = ({ img, tittle, category, date, className, mainclass }) => {
  
  
  return (
    <div className={clsx(" text-white ", mainclass)}>
      <div
        className={clsx(
          "w-full z-10  h-[25rem]  xl:h-[33rem] 3xl:h-[44rem] ",
          className
        )}
      >
        <Image
          src={"/images/da1.jpg"}
          height={10000}
          width={10000}
          className="w-full    h-full md:h-full 2xl:h-full object-cover"
          alt={tittle}
        />
      </div>
      <div className=" font-Polysans font-semibold  pt-4 md:pt-6  text-[1rem]">
        {category}
      </div>
      <div className=" font-Matter text-[0.9rem] pt-1 pb-3  w-[90%]">
        {tittle}
      </div>
      <div className=" font-Polysans text-[0.85rem] ">
        {/* {formatDate(date)} */}
      </div>
    </div>
  );
};

export default Blogscard;
