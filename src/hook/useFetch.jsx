import React, { useEffect, useState } from "react";
import { GetDataBook } from "../service/book.service";

const useFetch = (funcFetch, arg) => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await funcFetch(arg);
        setData((pre) => {
          return {
            loading: false,
            data: data,
            error: null,
          };
        });
      } catch (e) {
        setData((pre) => {
          return {
            loading: false,
            data: null,
            error: e.message,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
