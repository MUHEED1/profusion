'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Invitation = () => {
    const images = [
        "/images/cards/images.jpeg",
        "/images/cards/images (1).jpeg",
        "/images/cards/images (2).jpeg",
        "/images/cards/images (3).jpeg",
        "/images/cards/images (4).jpeg",
        "/images/cards/images (5).jpeg",
        "/images/cards/images (6).jpeg",
        "/images/cards/images (8).jpeg",
        "/images/cards/images (9).jpeg",
        "/images/cards/images (10).jpeg",
        "/images/cards/images (11).jpeg",
        "/images/cards/images (12).jpeg",
        "/images/cards/images (13).jpeg",
        "/images/cards/images (1).jpeg",
        "/images/cards/images (7).jpeg",

       
      ];
      
     
        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleImageClick = (index) => {
          setSelectedImage(index);
        };
      
        return (
            <div>
          <div className="grid grid-cols-4 gap-4 p-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className={`cursor-pointer object-cover w-full h-full border-4 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
             <div className=' flex   justify-center pb-10'>
            <div className=' space-x-6'>
            <button type="cars" className="w-[5rem] mx-auto py-2 px-4 bg-pink-800 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/cars"}>
           Skip
</Link>
          </button>
          <button type="cars" className="w-[5rem] mx-auto py-2 px-4 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/cars"}>
            Submit
</Link>
          </button>
          </div>
          </div>
          </div>
          </div>
        );
      };
      

export default Invitation