import React, { createContext, useState } from "react";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);

  const toggleDrawer = () => {
    setCartDrawer(!cartDrawer);
    console.log("ok");
  };
  return (
    <DataContext.Provider value={{ cartDrawer, toggleDrawer }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
