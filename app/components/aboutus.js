import React from "react";
import Padding from "./padding";
import Imagecard from "./imagecard";
import src10 from "@/public/images/mahfooz.png";
import src6 from "@/public/images/muheed.png";
import src9 from "@/public/images/mahmood.png";
import src2 from "@/public/images/muzammil.png";

const Aboutus = () => {
  return (
    <div className="pt-[14rem] bg-[white] pb-40 rounded-b-[45px] border-b border-[#e4e4e4]">
      <Padding>
        <div className=" flex justify-between pb-[2rem]">
          <div className="text-[2.2rem] font-Avant fontstyle font-bold pt-[1.5rem] text-[#000000] w-[45%]">
            We are fellow developers who wants to help the open source community
          </div>
          <div className="w-[30%] bg-slate-600 h-[500px]"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%] bg-slate-600 h-[500px]"></div>
          <div className=" font-Matter font-semibold text-[18px] pt-[12rem] text-[#525252] w-[50%]">
            At Profusion, we are a community of passionate developers dedicated
            to making a positive impact on the open-source community. With a
            shared vision of collaboration and innovation, we come together to
            contribute our skills and expertise towards building impactful
            software solutions. Driven by our love for technology and a desire
            to give back to the community, we believe in the power of open
            source to drive positive change and foster a culture of knowledge
            sharing and continuous learning.
          </div>
        </div>
        <div className="flex justify-between py-[2rem]">
          <div className=" font-Matter font-semibold text-[18px] pt-[10rem] text-[#525252] w-[50%]">
            Our team comprises developers from diverse backgrounds, each
            bringing their unique perspective and expertise to the table.
            Whether it's coding, testing, documentation, or community outreach,
            we work together seamlessly to create meaningful contributions that
            benefit developers worldwide. Through our collaborative efforts, we
            aim to empower fellow developers, support the growth of open-source
            projects, and create a more inclusive and vibrant developer
            community.
          </div>
          <div className="w-[40%] bg-slate-600 h-[500px]"></div>
        </div>
        <div className=" font-Avant fontstyle font-bold text-[2.5rem] pt-[4rem] up flex justify-center text-[#111111]">
          Meet the team
        </div>
        <div className="grid grid-cols-4 pt-[2rem]">
          <Imagecard
            src={src6}
            name={"Syed Muheed"}
            role={"Lead Developement Engineer"}
          />
          <Imagecard
            src={src9}
            name={"Mohammed Mahmood"}
            role={"Frontend Developer"}
          />
          <Imagecard
            src={src10}
            name={"AR Mahfooz"}
            role={"Frontend Developer"}
          />
          <Imagecard
            src={src2}
            name={"Muzammil Ather"}
            role={"Lead Experience Designer"}
          />
        </div>
      </Padding>
    </div>
  );
};

export default Aboutus;
