import React from "react";

const Detailscard = () => {
  return (
    <div className="p-[0.7rem] w-[20%] bg-slate-600 rounded-2xl shadow-xl">
      <div className="w-[full] h-[200px] bg-[white] rounded-xl mb-5"></div>
      <div className="text-[1rem] flex justify-center rounded-[10px] bg-red-100 p-[0.5rem] text-[grey] w-[20%] ">
        Lable
      </div>
      <div className=" text-[1.7rem] py-[1rem] "> Heading</div>
      <div className="text-[grey] text-[1rem] pb-[1.5rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        dolorum.
      </div>
      <div className="flex justify-center bg-blue-950 rounded-[10px] p-[1rem] ">
        Action
      </div>
    </div>
  );
};

export default Detailscard;
