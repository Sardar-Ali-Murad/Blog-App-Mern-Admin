import React from "react";
import "./index.css";
import "../Sidebar/index";
import Sidebar from "../Sidebar/index";
import { Outlet } from "react-router-dom";
const index = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default index;
