'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {
    const images = [
        "/images/stage/1.jpeg",
        "/images/stage/3.jpeg",
        "/images/stage/9.jpeg",
        "/images/stage/4.jpeg",
        "/images/stage/7.jpeg",
        "/images/stage/2.jpeg",
        "/images/stage/5.jpeg",
        "/images/stage/6.jpeg",
        "/images/stage/8.jpeg",
        "/images/stage/10.jpeg",
        "/images/stage/11.jpeg",
        "/images/stage/12.jpeg",
        "/images/stage/13.jpeg",
        "/images/stage/14.jpeg",
        "/images/stage/16.jpeg",
        "/images/stage/15.jpeg",



     

       
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