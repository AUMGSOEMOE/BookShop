import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const BookListsComponent = ({
  data: { id, author, description, title, image, price },
}) => {
  const { handleCartBtn } = useContext(DataContext);
  return (
    <div className=" mt-5">
      <div className="flex items-center px-5  h-[250px] ">
        <div className=" w-[200px] h-[150px]">
          <Link to={`/detail/${id}`}>
            <img src={image} className=" w-[200px] h-[180px]" alt={title} />
          </Link>
        </div>
        <div className=" select-none mt-7 ml-7">
          <h1 className=" text-xl font-bold "> {title}</h1>
          <h4 className=" text-md font-medium"> {author}</h4>
          <p> ${price}</p>
          <div className=" w-[100%] mt-3 ">
            <p className="text-center underline text-md font-medium ">
              Description
            </p>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
          <button
            onClick={handleCartBtn}
            className="mt-3 border border-text font-semibold text-lg text-text w-[80%] hover:bg-amber-200"
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListsComponent;
