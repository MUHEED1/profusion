import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Marqueee = () => {
  return (
    <div className="font-Avant text-[2.5rem] h-[20rem] flex text-[#b6a1de] bg-[#101010] items-center font-semibold fontstyle">
      <Link href={"/projectdetails"}>
        <Marquee
          pauseOnHover={true}
          speed={100}
          gradientWidth={300}
          gradientColor="black"
          gradient={true}
          className="flex  cursor-pointer"
        >
          <div className="px-10 flex items-center">
            C<span className="text-[3rem] mb-2">++</span>
          </div>
          <div className="px-10">C</div>
          <div className="px-10">JAVA</div>
          <div className="px-10">PYTHON</div>
          <div className="px-10">JAVASCRIPT</div>
          <div className="px-10">SWIFT</div>
          <div className="px-10">GO</div>
          <div className="px-10">KOTLIN</div>
          <div className="px-10">REACT</div>
        </Marquee>
      </Link>
    </div>
  );
};

export default Marqueee;
