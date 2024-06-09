import { Skeleton } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

const Blogskeleton = ({ className }) => {
  return (
    <div className=" space-y-3">
      <Skeleton
        className={clsx(
          "h-[25rem]  xl:h-[33rem] 3xl:h-[44rem] w-[19rem] xl:w-[23rem] 2xl:w-[20vw] 3xl:w-[22rem]",
          className
        )}
      >
        {" "}
      </Skeleton>
      <Skeleton className="w-[8rem] h-6"> </Skeleton>
      <Skeleton className="w-[18rem] h-8"></Skeleton>
      <Skeleton className="w-[6rem] h-5"></Skeleton>
    </div>
  );
};

export default Blogskeleton;
