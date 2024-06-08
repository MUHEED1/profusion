import React from "react";

const Plancard = ({ heading, text1, text2, text3, text4, text5 }) => {
  return (
    <div className="  px-[2.5rem] py-[2rem]  rounded-[35px] bg-gradient-to-b from-[#282828] to-[#13131363]">
      <div className=" font-Avant fontstyle up  font-bold text-[20px]">
        {heading}
      </div>
      <div className="pt-[2rem] flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          {" "}
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47502 12.8581 8.83336L7.4248 3.40002"
                stroke="#929292"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#929292] text-[1rem] font-Matter ">{text1}</div>{" "}
        </div>

        <div className="flex gap-2 items-center">
          {" "}
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47502 12.8581 8.83336L7.4248 3.40002"
                stroke="#929292"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#929292] text-[1rem] font-Matter ">{text2}</div>{" "}
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47502 12.8581 8.83336L7.4248 3.40002"
                stroke="#929292"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#929292] text-[1rem] font-Matter ">{text3}</div>{" "}
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47502 12.8581 8.83336L7.4248 3.40002"
                stroke="#929292"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#929292] text-[1rem] font-Matter ">{text4}</div>{" "}
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47502 12.8581 8.83336L7.4248 3.40002"
                stroke="#929292"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#929292] text-[1rem] font-Matter ">{text5}</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Plancard;
