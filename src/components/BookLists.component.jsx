import React from "react";

const BookListsComponent = ({
  data: { id, author, description, title, image },
}) => {
  return (
    <div className=" mt-5">
      <div className="flex items-center px-5  h-[250px] ">
        <div className=" w-[200px] h-[150px]">
          <img src={image} className=" w-[200px] h-[180px]" alt={title} />
        </div>
        <div className=" mt-7 ml-7">
          <h1 className=" text-xl font-bold ">Book : {title}</h1>
          <h4 className=" text-md font-medium">Author : {author}</h4>
          <div className=" w-[100%] mt-3 ">
            <p className="text-center underline text-md font-medium ">
              Description
            </p>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
          <button className="mt-3 border border-text font-semibold text-lg text-text w-[80%] hover:bg-amber-200">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListsComponent;
