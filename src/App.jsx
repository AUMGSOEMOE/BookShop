import React, { useContext, useEffect, useState } from "react";
import { GetDataBook } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./page";
import { CartDrawer, NavComponent } from "./components";
import DetailBookPage from "./page/book/DetailBook.page";
import { DataContext } from "./context/DataContext";
import NotFound from "../Not-found";

const App = () => {
  const { cartDrawer } = useContext(DataContext);
  return (
    <div>
      <NavComponent />
      {cartDrawer && <CartDrawer />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
