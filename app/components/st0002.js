"use client";
import Image from "next/image";
import React from "react";
import pic from "@/public/images/circle/pic.jpg";
import pic2 from "@/public/images/pic2.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

const St0002 = () => {
  const { scrollYProgress } = useScroll();

  // Define the points at which different parts of the text should change color
  const textColor = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [
    "#000000", // Initial state
    "#000000", // First change
    "#000000", // Second change
    "#000000", // Third change
    "#000000", // Final state
  ]);

  // Opacity transitions for images
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div className="bg-white">
      <div className="px-6 xl:px-16 bg-white py-40 flex gap-10">
        <motion.div
          className="w-full h-full object-cover"
          style={{ opacity: imageOpacity }}
        >
          <Image className=" h-full" width={700} height={500} src={pic} alt="" />
        </motion.div>
        <div className="hidden lg:block text-[1rem] py-20 xl:hidden  xl:text-3xl">
          <motion.div style={{ color: textColor }}>
            <div>We curate an array of</div>
            <div className="flex">
              <div className="mx-2 rotate-[6deg] rounded-full px-5">insightful</div>
              <div>resources, guiding you towards</div>
            </div>
            <div>innovative projects and cutting-edge technologies.</div>
          </motion.div>
        </div>
        {/* //small bg */}
        <div className="hidden py-0 xl:flex xl:text-[3rem] xl:leading-[4rem]">
          <div className="flex flex-wrap gap-x-2 items-center sp">
            <motion.div style={{ color: textColor }}>We</motion.div>
            <motion.div style={{ color: textColor }}> curate</motion.div>
            <motion.div style={{ color: textColor }}> an</motion.div>
            <motion.div style={{ color: textColor }}> array</motion.div>
            <motion.div style={{ color: textColor }}> of</motion.div>
            <motion.div style={{ color: textColor }}> insightful</motion.div>
            <motion.div style={{ color: textColor }}> resources,</motion.div>
            <motion.div style={{ color: textColor }}> guiding</motion.div>
            <motion.div style={{ color: textColor }}> you</motion.div>
            <motion.div style={{ color: textColor }}> towards</motion.div>
            <motion.div style={{ color: textColor }}> innovative</motion.div>
            <motion.div style={{ color: textColor }}> projects</motion.div>
            <motion.div style={{ color: textColor }}> and</motion.div>
            <motion.div style={{ color: textColor }}> cutting-edge</motion.div>
            <motion.div style={{ color: textColor }}> technologies.</motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-row-reverse gap-10 pb-40 w-full px-[3rem]">
        <div className="w-[40%] h-full">
          <Image src={pic2} alt="" />
        </div>
        <div className="flex flex-wrap w-[60%] xl:text-[3rem] xl:leading-[4.5rem] gap-x-4">
          <motion.div style={{ color: textColor }}>Our</motion.div>
          <motion.div style={{ color: textColor }}> roadmap</motion.div>
          <motion.div style={{ color: textColor }}> website</motion.div>
          <motion.div style={{ color: textColor }}> curates</motion.div>
          <motion.div style={{ color: textColor }}> insightful</motion.div>
          <motion.div style={{ color: textColor }}> resources</motion.div>
          <motion.div style={{ color: textColor }}> and</motion.div>
          <motion.div style={{ color: textColor }}> showcases</motion.div>
          <motion.div style={{ color: textColor }}> cutting-edge</motion.div>
          <motion.div style={{ color: textColor }}> advancements</motion.div>
          <motion.div style={{ color: textColor }}> like</motion.div>
          <motion.div style={{ color: textColor }}> AI</motion.div>
          <motion.div style={{ color: textColor }}> and</motion.div>
          <motion.div style={{ color: textColor }}> 3D</motion.div>
          <motion.div style={{ color: textColor }}> printing.</motion.div>
          <motion.div style={{ color: textColor }}> Explore</motion.div>
          <motion.div style={{ color: textColor }}> groundbreaking</motion.div>
          <motion.div style={{ color: textColor }}> projects</motion.div>
          <motion.div style={{ color: textColor }}> and</motion.div>
          <motion.div style={{ color: textColor }}> navigate</motion.div>
          <motion.div style={{ color: textColor }}> the</motion.div>
          <motion.div style={{ color: textColor }}> exciting</motion.div>
          <motion.div style={{ color: textColor }}> potential</motion.div>
          <motion.div style={{ color: textColor }}> of</motion.div>
          <motion.div style={{ color: textColor }}> these</motion.div>
          <motion.div style={{ color: textColor }}> technologies,</motion.div>
          <motion.div style={{ color: textColor }}> fostering</motion.div>
          <motion.div style={{ color: textColor }}> a</motion.div>
          <motion.div style={{ color: textColor }}> responsible</motion.div>
          <motion.div style={{ color: textColor }}> future</motion.div>
          <motion.div style={{ color: textColor }}> together.</motion.div>
        </div>
      </div>
    </div>
  );
};

export default St0002;
