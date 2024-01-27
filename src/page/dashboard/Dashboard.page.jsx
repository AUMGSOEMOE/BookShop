import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const nav = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (!data) {
      nav("/adminLogin");
    }
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-2 h-screen shadow-2xl   text-end ">
        <div className=" font-medium w-[40%] mx-auto">
          <ul>
            <Link to={"/dashboard"}>
              <li>Dashboard</li>
            </Link>
            <Link to={"/dashboard/inventory"}>
              <li>Inventory</li>
            </Link>
            <Link to={"/dashboard/blog"}>
              <li>Blogs</li>
            </Link>
            <Link to={"/dashboard/user"}>
              <li>User</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
