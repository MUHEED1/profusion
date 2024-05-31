import React from 'react'

const Page = () => {
 
          const images = [
        "/images/groom/suite/1.jpg",
        // "/images/groom/suite/2.jpg",
        "/images/groom/suite/3.jpg",
        "/images/groom/suite/4.jpg",
        // "/images/groom/suite/5.jpg",
        // "/images/groom/suite/6.jpg",
        "/images/groom/suite/7.jpg",
        // "/images/groom/suite/8.jpg",
        "/images/groom/suite/9.jpg",
        "/images/groom/suite/10.jpg",

     

       
      ];
      
     
        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleImageClick = (index) => {
          setSelectedImage(index);
        };
      
        return (
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
        );
      };
      
   

export default Page