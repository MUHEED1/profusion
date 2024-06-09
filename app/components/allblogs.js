// Allblogs.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchcasestudies } from "../api/fetchcasestudies";
import Padding from "./padding";
import Blogscard from "./blogscard";

const Allblogs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchcasestudies(1000);
        console.log(fetchedData, "ffffffff");
        setData(fetchedData);
        if (fetchedData) {
          setloading(false);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if(loading)
    {
        return(
            <div className=' h-screen w-full bg-[#000000] flex items-center justify-center' >
        <div className=' flex h-[7px] w-[400px] border-[1px] border-[grey] bg-[#000000] rounded-[10px] overflow-hidden relative shadow-lg ' >
            <div className=' flex h-full w-[208px] loading rounded-[10px]  ' >
            </div>
        </div>
    </div>
        )
    }

  
  return (
    <>
      <Padding className={" py-20 font-Matter"}>
        <div className=" pb-10 ">
          <div className=" text-[white] font-Avant fontstyle pb-1 font-semibold text-[2rem] md:text-[2.5rem] md:pb-1 xl:text-[3rem]  ">
            Blogs
          </div>
          <div className=" text-[#7A8597] text-[0.95rem] w-[90%]  max-w-[340px] ">
            Some Projects built by our community members
            
          </div>
        </div>
        
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10  ">
            
            {data?.map((blog) => (
              <div key={blog.id}>
                {console.log("Blog ID:", blog.id)} {/* Log the blog ID */}
                <Link href={`/blog?slug=${blog.attributes.slug}`} passHref>
                  <Blogscard
                    key={blog?.id}
                    tittle={
                blog?.attributes?.title
                        
                    }
                    category={
                      blog?.attributes?.category?.data?.attributes?.Category
                    }
                    img={
                      blog?.attributes?.thumbnail?.data?.attributes.url
                        ? `https://blog.polycolor.ch` +
                          blog?.attributes?.thumbnail?.data?.attributes.url
                        : ""
                    }
                    date={blog?.attributes.uploaddate}
                    className={"2xl:h-[35rem]"}
                  />
                </Link>
              </div>
            ))}
          </div>
        
      </Padding>
    </>
  );
};

export default Allblogs;
