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

  const r1 = useTransform(scrollYProgress, [0, 0.33], ["280deg", "0deg"]);
  const r2 = useTransform(scrollYProgress, [0, 0.33], ["150deg", "0deg"]);
  const r3 = useTransform(scrollYProgress, [0, 0.33], ["-200deg", "0deg"]);
  const r4 = useTransform(scrollYProgress, [0, 0.33], ["340deg", "0deg"]);
  const r5 = useTransform(scrollYProgress, [0, 0.33], ["-340deg", "0deg"]);


  return (
    <div ref={maf} className="hidden xl:flex   ">
      <div className=" relative max-h-[390px] max-w-[390px] ">
        <div className="fl">
          <motion.div className="  absolute" style={{ rotate: r1 }}>
            <C1 />
          </motion.div>
          <motion.div
            className="absolute "
            style={{ rotate: r2 }}
          >
            <C2 />
          </motion.div>
        </div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: r3 }}
        >
          <C3 />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: r4 }}
        >
          <C4 />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center absolute"
          style={{ rotate: r5 }}
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
