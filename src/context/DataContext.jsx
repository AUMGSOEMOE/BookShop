import React, { createContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { GetDataBook } from "../service/book.service";
import { api } from "../service/baseUrl";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { loading, data, error } = useFetch(GetDataBook, "books");
  const [noHave, setNoHave] = useState(false);

  const [cartDrawer, setCartDrawer] = useState(false);
  const [count, setCount] = useState(1);

  const handleCartBtn = async () => {
    const book = await api.get("books");
    setCartDrawer(true);
    // console.log(data);
  };

  const handleAdd = () => {
    setCount(count + 1);
    // setNewPrice(newPrice * 2);
    // console.log(newPrice);
  };
  const handleSus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toggleDrawer = () => {
    setCartDrawer(!cartDrawer);
    console.log("ok");
  };
  return (
    <DataContext.Provider
      value={{
        noHave,
        setNoHave,
        handleAdd,
        handleSus,
        count,
        handleCartBtn,
        loading,
        data,
        error,
        cartDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
