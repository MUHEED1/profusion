import React from 'react'
import Marquee from "react-fast-marquee";


const Marqueee = () => {
  return (
    <div className='font-Avant text-[2.5rem] h-[20rem] flex text-[#b6a1de] bg-black items-center font-semibold fontstyle'>
      <Marquee pauseOnHover={true} speed={100} gradientWidth={300}
      gradientColor='black'
      gradient={true} className='flex gap-5 cursor-pointer'>
        <div className='px-5 flex items-center'>C<span className='text-[3rem] mb-2'>++</span></div>
        <div className='px-5'>C</div>
        <div className='px-5'>JAVA</div>
        <div className='px-5'>PYTHON</div>
        <div className='px-5'>JAVASCRIPT</div>
        <div className='px-5'>SWIFT</div>
        <div className='px-5'>GO</div>
        <div className='px-5'>KOTLIN</div>
        <div className='px-5'>REACT</div>
      </Marquee>
    </div>
  )
}

export default Marqueee
