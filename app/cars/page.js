import React from 'react'

const Page = () => {
    const images = [
        "/images/groom/suite/1.jpeg",
        "/images/groom/suite/3.jpeg",
        "/images/groom/suite/9.jpeg",
        "/images/groom/suite/4.jpeg",
        "/images/groom/suite/7.jpeg",
        "/images/groom/suite/2.jpeg",
        "/images/groom/suite/5.jpeg",
        "/images/groom/suite/6.jpeg",
        "/images/groom/suite/8.jpeg",
        "/images/groom/suite/10.jpeg",
        "/images/groom/suite/11.jpeg",
        "/images/groom/suite/12.jpeg",
        "/images/groom/suite/13.jpeg",
        "/images/groom/suite/14.jpeg",
        "/images/groom/suite/16.jpeg",
        "/images/groom/suite/15.jpeg",



     

       
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