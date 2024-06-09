import React from "react";
import Task from "../components/task";
import Code1 from "../components/code";
import Accordionn from "../components/accordionn";
import Youtube from "../components/youtube";
import Resources from "../components/resources";
import pic from "@/public/images/image 21.jpg";

const Page = () => {
  return (
    <div>
      <Task
        src={pic}
        heading={"Snake Game"}
        content={
          "The Snake game is a classic arcade game that has been recreated on numerous platforms over the years. In this guide, we will explore how to implement a basic version of the Snake game in C++ using console-based input and output."
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
