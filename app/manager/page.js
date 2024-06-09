import Arrow from "@/public/icons/arrow";
import Image from "next/image";
import React from "react";
import pic from "@/public/images/code.png";
import Task from "../components/task";
import Resources from "../components/resources";
import { Code } from "@nextui-org/react";
import Code1 from "../components/code";
import Accordionn from "../components/accordionn";
import Youtube from "../components/youtube";
// import pic from "@/public/images/code.png";

const Page = () => {
  return (
    <div className="">
      <Task
        src={pic}
        heading={"PERSONAL TASK MANAGER"}
        content={
          "The Personal Task Manager is a web application that allows users to organize and manage their tasks efficiently. Users can create, update, and delete tasks, set priorities, deadlines, and categories and track their progress."
        }
      />
      <Resources />
      <Code1 />
      <Accordionn />
      <Youtube />
    </div>
  );
};

export default Page;
