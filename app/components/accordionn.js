"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Padding from "./padding";

const Accordionn = () => {
  return (
    <div>
      <Padding className={"pt-[3rem] min-w-[60rem] max-w-[60rem] mx-auto"}>
        <div className="font-Avant font-semibold fontstyle text-[2.5rem]">
          Tips
        </div>
        <Accordion className="text-[0.9rem]">
          <AccordionItem
            className="border-b py-2 font-semibold border-b-gray-500"
            key="1"
            aria-label="Accordion 1"
            title="Start small"
          >
            <div className=" font-normal ">
              Begin by implementing basic features like task creation and
              viewing before moving on to more complex functionalities.
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b py-2 font-semibold border-b-gray-500"
            title="Documentation"
          >
            <div className=" font-normal ">
              It's always better to read the Documentation and understand itself
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b py-2 font-semibold border-b-gray-500"
            title="Testing"
          >
            <div className=" font-normal ">
              Always Thorougly test your project to make it seamless
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b py-2 font-semibold border-b-gray-500"
            title="Set Goals"
          >
            <div className=" font-normal ">
              Establish specific, measurable, achievable, relevant, and
              time-bound (SMART) goals for your project.
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b py-2 font-semibold border-b-gray-500"
            title="Plan and Document"
          >
            <div className=" font-normal ">
              Create a Project Plan: Outline the major phases, tasks,
              milestones, and deadlines. Documentation: Maintain comprehensive
              documentation from the start, including requirements, design
              decisions, and code comments.
            </div>
          </AccordionItem>
        </Accordion>
      </Padding>
    </div>
  );
};

export default Accordionn;
