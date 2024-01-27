import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdminLoginPage,
  BlogPage,
  Dashboard,
  DetailBook,
  HomePage,
  InventoryPage,
  RegisterPage,
  UserPage,
} from "./page";
import { CartDrawer, NavComponent } from "./components";
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
        <Route path="/detail/:id" element={<DetailBook />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
