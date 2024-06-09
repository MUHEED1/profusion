import React from "react";
import Task from "../components/task";
import Resources from "../components/resources";
import Code1 from "../components/code";
import Accordionn from "../components/accordionn";
import Youtube from "../components/youtube";
import pic from "@/public/images/image 20.jpg";

const Page = () => {
  return (
    <div>
      <Task
        src={pic}
        heading={"Spring Boot"}
        content={
          "Spring Boot is a powerful, easy-to-use framework for building Java applications. It is part of the larger Spring ecosystem and is designed to simplify the development of new Spring applications. Spring Boot aims to reduce the amount of configuration required to set up a Spring application, allowing developers to quickly create standalone, production-ready applications."
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
