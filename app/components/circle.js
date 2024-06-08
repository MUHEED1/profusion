"use client";
import React, { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import C1 from "@/public/icons/c1";
import C2 from "@/public/icons/c2";
import C3 from "@/public/icons/c3";
import C4 from "@/public/icons/c4";
import C5 from "@/public/icons/c5";
const Circle = () => {
  const maf = useRef();
  const { scrollYProgress } = useScroll({
    //   target: maf
  });
  useEffect(() => {
    return () => {
      console.log(scrollYProgress);
    };
  }, [scrollYProgress]);

  const ro = useTransform(scrollYProgress, [0.64, 1.3], ["0deg", "-360deg"]);
  const rv = useTransform(scrollYProgress, [0.64, 1.4], ["0deg", "360deg"]);
  const rv2 = useTransform(scrollYProgress, [0.64, 2], ["0deg", "360deg"]);

  const ro3 = useTransform(scrollYProgress, [0.64, 3], ["0deg", "-360deg"]);

  return (
    <div ref={maf} className="hidden xl:flex   ">
      <div className=" relative max-h-[390px] max-w-[390px] ">
        <div className="fl">
          <motion.div className=" -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]  absolute" style={{ rotate: ro }}>
            <C1 />
          </motion.div>
          <motion.div
            className="absolute "
            style={{ rotate: rv2 }}
          >
            <C2 />
          </motion.div>
        </div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: ro3 }}
        >
          <C3 />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: rv }}
        >
          <C4 />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: rv2 }}
        >
          <C5 />
        </motion.div>
        {/* <motion.div className=" absolute" style={{ rotate: ro3 }}>
          <C6l />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Circle;
