import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-[85%] mx-auto h-screen">
      <div className=" flex justify-center text-nav font-medium text-4xl bg-text w-[70%]">
        <span className="">Your're way is wrong</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
          />
        </svg>
        <span>There's nothing here!</span>
      </div>
    </div>
  );
};

export default NotFound;
