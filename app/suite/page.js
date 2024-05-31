'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {
 
          const images = [
        "/images/groom/suite/1.jpg",
        "/images/groom/suite/3.jpg",
        "/images/groom/suite/9.jpeg",
        "/images/groom/suite/4.jpg",
        "/images/groom/suite/7.jpeg",
        // "/images/groom/suite/2.jpg",
        // "/images/groom/suite/5.jpg",
        // "/images/groom/suite/6.jpg",
        // "/images/groom/suite/8.jpg",
        // "/images/groom/suite/10.jpeg",

     

       
      ];
      
     
        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleImageClick = (index) => {
          setSelectedImage(index);
        };
      
        return (
            <div className='w-full'>
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
          <div className=' flex  justify-center pb-10'>
          <button type="submit" className="w-[5rem] mx-auto py-2 px-4 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/group"}>
            Submit
</Link>
          </button></div>
        </div>
        );
      };
      
   

export default Page