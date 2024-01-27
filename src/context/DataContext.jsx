import React, { createContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { GetDataBook } from "../service/book.service";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { loading, data, error } = useFetch(GetDataBook, "books");

  const [cartDrawer, setCartDrawer] = useState(false);
  const [users, setUser] = useState([]);
  const addUser = (data) => {
    setUser([...users, data]);
  };

  const toggleDrawer = () => {
    setCartDrawer(!cartDrawer);
    console.log("ok");
  };
  return (
    <DataContext.Provider
      value={{ users, addUser, loading, data, error, cartDrawer, toggleDrawer }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
