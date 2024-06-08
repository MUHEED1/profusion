import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Circle from "./circle";

const Rotating = () => {
  const maf = useRef(null);
  const { scrollYProgress } = useScroll({
    //   target: maf
  });
  useEffect(() => {
    return () => {
      console.log(scrollYProgress);
    };
  }, [scrollYProgress]);

  const t = useTransform(scrollYProgress, [0.1, 0.5], ["0rem", "0rem"]);

  const pd = useTransform(scrollYProgress, [0.643, 0.74], ["32%", "15%"]);
  return (
    <div className="bg-[#101010]">
      <div className="  relative">
        <motion.div
          className={` hidden lg:block sticky -z-10`}
          style={{ top: t }}
        >
          {/* ${ scrollY>9500 && scrollY < 12500 ? " sticky ":" relative"} */}
          <div ref={maf} className=" overflow-hidden xl:pb-[20rem]">
            <motion.div
              className=" flex    h-[110vh]  relative"
              style={{ translateX: pd }}
            >
              <div className=" pt-[7.5vh]   ">
                <Circle />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className=" flex justify-end z-100">
          <Page99 />
        </div>
      </div>
    </div>
  );
};

export default Rotating;
