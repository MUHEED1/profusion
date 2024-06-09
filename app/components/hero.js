"use client"
import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import Padding from './padding';
import Svg from '@/public/icons/svg';
import Image from 'next/image';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const maf=useRef()

  // Define animations for scaling and opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={maf} className='h-[500vh] w-full mt-[15rem]  relative '>
      <motion.video 
        autoPlay
        playsInline
        muted
        loop
        src='/images/video.mp4'
        style={{ scale, opacity }}
        className='sticky  top-10 rounded-t-[3rem]'
    />
      {/* <ScrollyVideo src="/images/video.mp4" /> */}
    {/* <div className='absolute w-screen h-full left-0 top-0 bg-[#0000003a]'></div> */}
      <div>

<Padding className={"absolute z-40 top-[20rem]"}>

<div className=' space-y-3'>
      <div className=' font-Avant fontstyle font-semibold max-w-[30rem] leading-[3rem] text-[2.5rem]'>Discover and Explore the world of tech</div>
      <div className='px-5 rounded-full py-2 bg-black text-white w-max  font-Matter'>Explore</div>
</div>
<div className=' pt-[50rem] space-y-3'>
      <div className=' fontstyle font-Avant font-semibold max-w-[45rem] text-[2.5rem]'>Your One Stop Solution To Kickstart Your Journey and Explore the world of tech</div>
      <div className='px-5 rounded-full py-2 bg-black text-white w-max  font-Matter'>Explore</div>
</div>
<div className=' pt-[50rem] space-y-3'>
      <div className=' fontstyle font-Avant font-semibold max-w-[30rem] text-[2.5rem]'>Be Ahead of your peers</div>
      <div className='px-5 rounded-full py-2 bg-white text-black w-max  font-Matter'>Explore</div>
</div>
</Padding>
      </div>
      
    </div>

  );
};

export default Hero;
