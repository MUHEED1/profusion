import React from "react";

const Contentimage = ({ src }) => {
  return (
    <div className="pt-10 md:pt-20">
      <img
        src={`https://blog.polycolor.ch` + src}
        className=" h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]  object-cover w-full  "
      />
    </div>
  );
};

export default Contentimage;
