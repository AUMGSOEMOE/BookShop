import React from "react";
import DataContextProvider from "./DataContext";

const ProviderStore = ({ children }) => {
  return <DataContextProvider>{children}</DataContextProvider>;
};

export default ProviderStore;
