import Arrow from "@/public/icons/arrow";
import Image from "next/image";
import React from "react";
import pic from "@/public/images/code.png";

const Task = () => {
    return (
        <div className="bg-[#111111] px-[3rem] py-28">
            <div className="flex gap-28 pt-10">
                <div>
                    <div className="text-[40px] font-Avant fontstyle font-bold text-[#FFFFFF] pt-16 w-max">
                        PERSONAL TASK MANAGER
                    </div>
                    <div className="text-[#D0D0D0] text-[1rem] font-medium font-Matter pt-4 w-[480px]">
                        The Personal Task Manager is a web application that allows users to
                        organize and manage their tasks efficiently. Users can create,
                        update, and delete tasks, set priorities, deadlines, and categories,
                        and track their progress.
                    </div>
                    <div className="flex gap-1 pt-10">
                        <div>
                            <Arrow />
                        </div>
                        <div className="text-[#B6A1DE] font-normal font-Matter text-[1rem]">
                            Skills
                        </div>
                    </div>
                    <div className="flex gap-1 pt-4">
                        <div>
                            <Arrow />
                        </div>
                        <div className="text-[#B6A1DE] font-normal font-Matter text-[1rem]">
                            Resources
                        </div>
                    </div>
                    <div className="flex gap-1 pt-4">
                        <div>
                            <Arrow />
                        </div>
                        <div className="text-[#B6A1DE] font-normal font-Matter text-[1rem]">
                            Useful Tips
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={pic} alt="" />
                </div>
            </div>
            <div className="text-white font-bold text-[40px] font-Avant fontstyle text-center w-full pt-44 pb-0">
                SKILLS
            </div>
            <div className="flex w-full justify-center">
                <div className="bg-[#9393934D] font-Matter text-[15px] py-2  font-normal px-4 rounded-full text-[#E2E2E2] w-max ">These are the skills you’ll learn</div>
            </div></div>
    );
};

export default Task;
