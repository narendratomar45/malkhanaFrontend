import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Home = () => {
  return (
    <div className="flex">
      <div className="   bg-gray-800 text-white h-screen fixed z-10">
        <Sidebar />
      </div>

      <div className=" ml-60 overflow-x-hidden">
        <Body />
      </div>
    </div>
  );
};

export default Home;
