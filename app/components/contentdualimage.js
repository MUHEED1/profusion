import React from "react";

const Contentdualimage = ({ src1, src2 }) => {
  return (
    <div className=" grid md:grid-cols-2 gap-4 py-20 md:pb-0 ">
      <img
        src={src1}
        className=" h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]  object-cover w-full  "
      />
      <img
        src={src2}
        className=" h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]  object-cover w-full  "
      />
    </div>
  );
};

export default Contentdualimage;
