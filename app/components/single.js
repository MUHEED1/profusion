"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import src from "@/public/images/da1.jpg";
import { useSearchParams } from "next/navigation";
import { fetchcasestudiesbyslug } from "../api/fetchblogsbyslug";
import Padding from "./padding";
import Contenth1 from "./contenth1";
import Contenth2 from "./contenth2";
import Contenth3 from "./contenth3";
import Contentdualimage from "./contentdualimage";
import Contentimage from "./contentimage";

const Title = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [blogData, setBlogData] = useState();

  const [thumnailurl, setthumbnailurl] = useState();
  const [author, setauthor] = useState();
  const [category, setcategory] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log(slug, "slug");
    const fetchData = async () => {
      try {
        const response = await fetchcasestudiesbyslug(slug);
        console.log(response);
        setBlogData(response.data[0].attributes);

        setthumbnailurl(
          response.data[0].attributes.thumbnail.data.attributes.url
        );

        setauthor(response.data[0].attributes.services);
        setcategory(response.data[0].attributes.category);
        setloading(false);
        console.log(response, "futuree");
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className=" h-screen w-full bg-[#000000] flex items-center justify-center">
        <div className=" flex h-[7px] w-[400px] border-[1px] border-[grey] bg-[#000000] rounded-[10px] overflow-hidden relative shadow-lg ">
          <div className=" flex h-full w-[208px] loading rounded-[10px]  "></div>
        </div>
      </div>
    );
  }

  return (
    <div className=" pt-[10rem] py-20  rounded-b-[45px] border-b border-[#e4e4e4] ">
      <Padding
        className={
          " font-Matter text-white font-medium text-[0.85rem] flex flex-col "
        }
      >
        <div className=" text-[#FFFFFF] font-Avant fontstyle font-semibold text-[2rem] leading-[2.6rem] lg:text-[2.5rem] lg:leading-[3.1rem] w-[95%] md:max-w-[480px] lg:max-w-[580px] ">
          {blogData?.title}
        </div>
        <div className=" py-8 flex justify-between md:py-6  ">
          <div>
            <div className="text-[#AFAFAF]">Domain</div>
            <div>{author}</div>
          </div>
          <div className=" flex gap-6 md:gap-10 lg:gap-14">
            <div>
              <div className="text-[#AFAFAF]">Category</div>
              <div>{category}</div>
            </div>
            <div>
              <div className="text-[#AFAFAF]">Date</div>
              <div>{blogData?.publishedAt}</div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <Image
            src={src}
            className=" h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]  object-cover w-full  "
            width={10000}
            height={1000}
          />
        </div>

        <Contenth1 content={blogData?.content1}></Contenth1>

        <Contenth2 content={blogData?.content1}></Contenth2>
        <Contenth3 content={blogData?.content1}></Contenth3>
      </Padding>
    </div>
  );
};

export default Title;
