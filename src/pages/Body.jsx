import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col h-full  ">
      <div className=" fixed top-0 left-0 right-0 ">
        <Navbar />
      </div>
      <div className="flex-1 p-4 overflow-auto mt-[64px] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
