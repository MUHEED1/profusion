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

  
  return (
    <>
      <Padding className={" py-20 font-Matter"}>
        <div className=" pb-10 ">
          <div className=" text-[#222222] font-Avant fontstyle pb-1 font-semibold text-[2rem] md:text-[2.5rem] md:pb-1 xl:text-[3rem]  ">
            Blogs
          </div>
          <div className=" text-[#7A8597] text-[0.95rem] w-[90%]  max-w-[340px] ">
            Is the paint on your balcony railing peeling off? Do you want car
            rims that match the col
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
