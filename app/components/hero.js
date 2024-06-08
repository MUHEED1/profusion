"use client";
import React from "react";
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
const Hero = () => {
  return (
    <div className=" h-[100vh] w-full absolute top-0">
      <video autoPlay playsInline muted loop src="/images/video.mp4" />
    </div>
  );
};
export default Hero;
