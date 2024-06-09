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
        <div className="z-10 relative bg-[#101010] pb-40 rounded-b-[45px] border-b border-[#e4e4e4]">

            <Task content={"Python is a booming language. With its capacity in versatility, it can be used for Backend, Automation and also AI/ML"} heading={"PYTHON"} src={pic}  />
            <Resources />
            <Code1 />
            <Accordionn />
            <Youtube />
        </div>
    )
}

export default Page;
