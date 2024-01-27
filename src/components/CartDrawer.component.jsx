import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const CartDrawerComponent = () => {
  const { toggleDrawer } = useContext(DataContext);
  return (
    <div
      id="drawer-example"
      className="fixed top-0 right-0 z-40 h-screen overflow-y-auto  bg-white w-80 dark:bg-gray-800"
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <div className="h-[200px] flex items-center bg-text">
        <div className="flex justify-self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffd780"
            stroke="#425272"
            strokeWidth={1.5}
            className="w-12 select-none h-12"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <div>
            <h4 className=" text-text font-medium  select-none text-4xl bg-nav">
              OPTION
            </h4>
            <span className=" text-nav font-medium select-none text-sm ">
              Books
            </span>
            <span className="text-nav font-medium select-none text-sm ">
              Store
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleDrawer}
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CartDrawerComponent;
