"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const Okay = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    setMouseX(clientX - rect.left);
    setMouseY(clientY - rect.top);
  };

  const x = useMotionValue(mouseX);
  const y = useMotionValue(mouseY);

  const rotateX = useTransform(y, [0, 1000], [15, -15]);
  const rotateY = useTransform(x, [0, 1000], [-15, 15]);

  useEffect(() => {
    x.set(mouseX);
    y.set(mouseY);
  }, [mouseX, mouseY, x, y]);

  const translateX = useTransform(x, [0, window.innerWidth], [-35, 35]);
  const translateY = useTransform(y, [0, window.innerHeight], [-35, 35]);

  return (
    <motion.div
      className="h-screen w-screen bg-black"
      onMouseMove={handleMouseMove}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          right: "8rem",
          top: "8rem",
          translateX: translateX,
          translateY: translateY,
          rotateX: 10,
          rotateY: -20,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          height={200}
          width={200}
          src="/images/p2.jpg"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          left: "5rem",
          top: "8rem",
          translateX: translateX,
          translateY: translateY,
          rotateX: -20,
          rotateY: 15,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          autoPlay
          loop
          playsInline
          muted
          height={200}
          width={200}
          src="/images/vd6.mp4"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          left: "45%",
          bottom: "2rem",
          translateX: translateX,
          translateY: translateY,
          rotateX: 25,
          rotateY: 0,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          height={210}
          width={210}
          src="/images/p3.jpg"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "4rem",
          right: "8rem",
          x: translateX,
          y: translateY,
          rotateX: -10,
          rotateY: -10,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          autoPlay
          loop
          playsInline
          muted
          height={200}
          width={200}
          src="/images/vd4.mp4"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "4rem",
          right: "45%",
          x: translateX,
          y: translateY,
          rotateX: -10,
          rotateY: -10,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          autoPlay
          loop
          playsInline
          muted
          height={200}
          width={200}
          src="/images/vd5.mp4"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "-5rem",
          left: "2rem",
          translateX: translateX,
          translateY: translateY,
          rotateX: -15,
          rotateY: -10,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          className=" overflow-hidden max-h-[10rem]"
          autoPlay
          loop
          playsInline
          muted
          height={200}
          width={200}
          src="/images/vd2.mp4"
          alt="Image description"
        />
      </motion.div>
      <motion.div
        className=" absolute  -translate-y-1/2  top-[30%] duration-100 ease-linear"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          width="869"
          height="116"
          viewBox="0 0 869 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.3613 113.885H0V2.11458H37.7918C49.734 1.96353 58.6529 3.625 64.5484 6.34375C76.6418 11.9323 84.2001 24.7708 84.2001 39.875C84.2001 60.5677 72.7114 78.8437 40.664 78.8437H27.3613V113.885ZM27.3613 53.7708H39.6058C51.0945 53.7708 56.8389 49.8437 56.8389 40.3281C56.8389 31.2656 51.2457 27.1875 38.5476 27.1875H27.3613V53.7708Z"
            fill="white"
          />
          <path
            d="M182.269 113.885H149.617L123.767 77.7865H123.465V113.885H96.1034V2.11458H132.686C144.326 2.11458 153.245 3.625 159.14 6.1927C171.233 11.6302 179.699 24.7708 179.699 40.6302C179.699 58.3021 169.117 72.8021 151.884 75.8229L182.269 113.885ZM123.465 58.3021H134.046C145.384 58.3021 152.338 53.0156 152.338 42.2917C152.338 32.625 145.082 27.1875 134.349 27.1875H123.465V58.3021Z"
            fill="white"
          />
          <path
            d="M251.819 116C220.678 116 191.503 93.6458 191.503 60.5677C191.503 25.9792 216.445 0 250.458 0C283.11 0 309.564 25.224 309.564 57.2448C309.564 90.3229 283.866 116 251.819 116ZM250.912 90.9271C268.598 90.9271 280.994 75.974 280.994 58.151C280.994 40.6302 268.447 25.0729 250.458 25.0729C232.62 25.0729 220.073 40.026 220.073 57.6979C220.073 76.125 232.62 90.9271 250.912 90.9271Z"
            fill="white"
          />
          <path
            d="M352.282 113.885H324.921V2.11458H385.992V27.1875H352.282V46.2187H384.783V71.2917H352.282V113.885Z"
            fill="white"
          />
          <path
            d="M492.846 113.885H465.787V102.708H465.334C459.892 111.167 449.461 116 438.426 116C414.239 116 401.088 101.953 401.088 71.5938V2.11458H429.659V69.026C429.659 82.9219 435.554 90.776 447.496 90.776C457.927 90.776 464.276 83.224 464.276 71.1406V2.11458H492.846V113.885Z"
            fill="white"
          />
          <path
            d="M585.249 34.7396H556.98C555.771 26.7344 552.445 23.8646 546.852 23.8646C541.561 23.8646 537.026 27.6406 537.026 32.625C537.026 39.2708 543.073 42.2917 555.317 47.5781C579.958 58.151 586.156 67.0625 586.156 81.7135C586.156 103.312 571.341 116 547.154 116C522.816 116 506.793 103.312 506.793 79.2969V76.8802H535.212C535.363 86.0937 539.898 92.1354 547.003 92.1354C552.899 92.1354 557.736 87.4531 557.736 81.4115C557.736 72.5 545.34 68.5729 535.212 64.4948C516.921 57.0937 508.607 47.4271 508.607 32.9271C508.607 13.8958 527.049 0 547.608 0C555.015 0 561.515 1.66145 567.411 4.68229C579.353 10.875 585.097 19.7865 585.249 34.7396Z"
            fill="white"
          />
          <path
            d="M628.368 113.885H599.797V2.11458H628.368V113.885Z"
            fill="white"
          />
          <path
            d="M704.139 116C672.999 116 643.823 93.6458 643.823 60.5677C643.823 25.9792 668.766 0 702.779 0C735.431 0 761.885 25.224 761.885 57.2448C761.885 90.3229 736.187 116 704.139 116ZM703.232 90.9271C720.919 90.9271 733.314 75.974 733.314 58.151C733.314 40.6302 720.768 25.0729 702.779 25.0729C684.941 25.0729 672.394 40.026 672.394 57.6979C672.394 76.125 684.941 90.9271 703.232 90.9271Z"
            fill="white"
          />
          <path
            d="M869 113.885H840.429V46.974C840.429 33.2292 834.534 25.224 822.592 25.224C812.312 25.224 805.812 33.0781 805.812 44.7083V113.885H777.242V2.11458H804.3V13.2917H804.754C810.045 4.83332 820.173 0 831.662 0C855.395 0 869 13.7448 869 43.1979V113.885Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Okay;
