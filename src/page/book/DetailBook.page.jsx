import React from "react";
import useFetch from "../../hook/useFetch";
import { GetDataBook } from "../../service/book.service";
import { useParams } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(GetDataBook, `books/${id}`);
  console.log(data);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" grid grid-cols-12 grid-rows-3 w-[85%] h-screen mx-auto">
          <div className=" flex items-center justify-center col-span-3  ">
            <div className=" w-[100px]">
              <img src={data.image} alt="" />
            </div>
          </div>
          <div className=" col-span-9 row-span-2 p-5 ">
            <h1 className=" text-3xl  font-bold">Book:{data.title}</h1>
            <h3 className=" text-xl font-semibold">Author : {data.author}</h3>
            <h6 className=" text-lg font-medium ">Summary :</h6>
            <div className=" px-5">
              <p className="text-lg text-text">{data.summary}</p>
            </div>
          </div>
          <div className=" col-span-3 row-span-2 ">
            <h4 className=" text-center font-medium">{data.author}</h4>
            <p className=" px-2">{data.about}</p>
          </div>
          <div className=" col-span-9 flex flex-col justify-center items-center  ">
            <p className=" font-medium text-xl">Price : $ {data.price}</p>
            <div className="flex">
              <button className="border-2 border-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-text"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <div className=" text-text w-52 bg-slate-300">1</div>
              <button className=" border-2 border-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-text"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <button className="w-60 mt-3 border border-text text-text py-1">
              Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBookPage;
