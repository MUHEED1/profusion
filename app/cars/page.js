'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {
    const images = [
        "/images/stage/s1.jpeg",
        "/images/stage/s3.jpeg",
        "/images/stage/s9.jpeg",
        "/images/stage/s4.jpeg",
        "/images/stage/s7.jpeg",
        "/images/stage/s2.jpeg",
        "/images/stage/s5.jpeg",
        "/images/stage/s6.jpeg",
        "/images/stage/s8.jpeg",
        "/images/stage/s10.jpeg",
        "/images/stage/s11.jpeg",
        "/images/stage/s12.jpeg",
        "/images/stage/s13.jpeg",
        "/images/stage/s14.jpeg",
        "/images/stage/s16.jpeg",
        "/images/stage/s15.jpeg",


      ];
      
     
        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleImageClick = (index) => {
          setSelectedImage(index);
        };
      
        return (
            <div className='w-full pt-20'>
          <div className="grid grid-cols-3 gap-4 p-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className={`cursor-pointer object-cover w-full h-full border-4 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => handleImageClick(index)}
              />
            ))}

          </div>
          <div className=' flex   justify-center pb-10'>
            <div className=' space-x-6'>
            <button type="submit" className="w-[5rem] mx-auto py-2 px-4 bg-pink-800 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/invatation"}>
           Skip
</Link>
          </button>
          <button type="submit" className="w-[5rem] mx-auto py-2 px-4 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/invitation"}>
            Submit
</Link>
          </button>
          </div>
          </div>
        </div>
        );
      };
      
export default Page