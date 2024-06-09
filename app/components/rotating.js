"use client";
import React, { useEffect, useRef, useState } from "react";
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

  const t = useTransform(scrollYProgress, [0.1, 1], ["0rem", "0rem"]);

  const pd = useTransform(scrollYProgress, [0, 0.74], ["35%", "6%"]);

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
      } duration-1000`}
    >
      <div className="  relative">
        <motion.div
          className={` hidden lg:block sticky z-10`}
          style={{ top: t }}
        >
          {/* ${ scrollY>9500 && scrollY < 12500 ? " sticky ":" relative"} */}
          <div ref={maf} className=" overflow-hidden  pt-[10rem]">
            <motion.div
              className=" flex  w-full   h-[80vh]  relative z-[1000]"
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
