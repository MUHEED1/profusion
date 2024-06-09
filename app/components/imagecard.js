import Image from "next/image";
import React from "react";

const Imagecard = ({ src, name, role }) => {
  return (
    <div className=" w-[90%] md:w-[19rem] 2xl:w-[22rem] ">
      <Image src={src} className=" w-full object-cover  " />
      {name && (
        <div className=" pt-5 text-[1.1rem] font-avlon text-[#000000] ">
          {name}
        </div>
      )}
      {role && (
        <div className=" text-[#6C6C6C] text-[0.85rem] font-gilroy font-medium ">
          {role}
        </div>
      )}
    </div>
  );
};

export default Imagecard;
