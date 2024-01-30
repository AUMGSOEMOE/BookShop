import React, { useContext } from "react";
import { BookLists } from "../components";
import { DataContext } from "../context/DataContext";

const HomePage = () => {
  const { data, error, loading } = useContext(DataContext);
  // console.log(data);
  return (
    <div>
      <div className=" px-5 h-screen w-[85%] mx-auto">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className=" grid grid-cols-2 gap-y-4 gap-x-2 ">
            {data.map((i) => (
              <BookLists key={i.id} data={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
