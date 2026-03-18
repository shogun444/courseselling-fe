"use client";
import { easeInOut, motion } from "motion/react";
export default function SVG() {
  return (
    <div className="max-w-70 mx-auto">
      {/* <h1>Signup</h1>
   <h1>Search for Courses</h1>
   <h1>View Course Details</h1>
   <h1>Enroll in the COurse</h1>
   <h1>Start Watching Videos</h1> */}

      <div className="size-15 translate-x-2  translate-y-4 bg-violet-50 border-3 border-white  rounded-md"></div>
      <div className="size-15 translate-x-35  translate-y-34  bg-violet-50 border-3 border-white  rounded-md"></div>
      <div className="h-15 w-45 -translate-x-10  -translate-y-6  bg-violet-50 border-3 border-white  rounded-md"></div>
      <div className="size-15 -translate-x-6  translate-y-10  bg-violet-50 border-3 border-white  rounded-md"></div>
      <div className="size-15 -translate-x-6  translate-y-20  bg-violet-50 border-3 border-white  rounded-md"></div>

      <div className="h-10 w-15 overflow-hidden  rounded-md translate-x-41  -translate-y-42 p-px">
        <div className="w-full h-full  border-white border bg-violet-50 relative z-10 rounded-[7px]"></div>
        <div className="w-full h-full inset-0 absolute bg-conic from-violet-600 from-20% to-transparent to-30% animate-spin scale-[1.6] duration-200"></div>
      </div>
      <svg
        className="-translate-y-74"
        xmlns="http://www.w3.org/2000/svg"
        width="70%"
        height="50%"
        viewBox="0 0 242 364"
      >
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: easeInOut,
          }}
          d="M 48 1.5 L 48 84 C 48 92.837 55.163 100 64 100 L 225 100 C 233.837 100 241 107.163 241 116 L 241 161 C 241 169.837 233.837 177 225 177 L 214.5 177 L 214.5 208 L 214.5 177 L 17 177 C 8.163 177 1 184.163 1 193 L 1 363"
          stroke="rgb(177, 161, 192)"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="transparent"
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
          will-change="auto"
        ></motion.path>
      </svg>
    </div>
  );
}
