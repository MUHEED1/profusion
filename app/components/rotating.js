"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Circle from "./circle";
import Page99 from "./page99";

const Rotating = () => {
  const maf = useRef(null);
  const { scrollYProgress } = useScroll({
    //   target: maf
  });
  useEffect(() => {
    return () => {
      console.log(scrollYProgress);
    };
  }, [scrollYProgress]);

  const t = useTransform(scrollYProgress, [0.1, 0.5], ["0rem", "0rem"]);

  const pd = useTransform(scrollYProgress, [0, 0.74], ["39%", "6%"]);
  return (
    <div className="bg-[#101010]">
      <div className="  relative">
        <motion.div
          className={` hidden lg:block sticky z-10`}
          style={{ top: t }}
        >
          {/* ${ scrollY>9500 && scrollY < 12500 ? " sticky ":" relative"} */}
          <div ref={maf} className=" overflow-hidden  pt-[10rem]">
            <motion.div
              className=" flex  w-full   h-[110vh]  relative z-[1000]"
              style={{ translateX: pd }}
            >
              <div className="   ">
                <Circle />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className=" flex justify-end z-100">
          <Page99 />
        </div>
      </div>
    </div>
  );
};

export default Rotating;
