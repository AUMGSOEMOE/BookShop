import React from "react";
import useFetch from "../hook/useFetch";
import { GetDataBook } from "../service/book.service";
import { BookLists } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetDataBook, "books");
  // console.log(data);
  return (
    <div>
      <div className=" px-5 h-screen w-[85%] mx-auto">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className=" grid grid-cols-2 gap-y-4 gap-x-2 ">
            {data.map((i) => (
              <Link to={`/detail/${i.id}`} key={i.id}>
                <BookLists data={i} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
