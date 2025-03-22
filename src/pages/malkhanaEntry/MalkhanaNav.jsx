import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MalkhanaNav = () => {
  const location = useLocation();
  const malkhanaEntryLocation = location.pathname.startsWith("/malkhana");

  return (
    <div className="w-full">
      {malkhanaEntryLocation && (
        <nav className="flex flex-wrap justify-center gap-5 p-4 bg-gray-300 shadow-md rounded-lg">
          <Link
            to={"/malkhana/malkhanaEntry"}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Malkhana Entry
          </Link>
          <Link
            to={"/malkhana/fslEntry"}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            FSL Entry
          </Link>
          <Link
            to={"/malkhana/kurkiEntry"}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Kurki Entry
          </Link>
          <Link
            to={"/malkhana/othersEntry"}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Others Entry
          </Link>
          <Link
            to={"/malkhana/unclaimedEntry"}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
          >
            Unclaimed Entry
          </Link>
        </nav>
      )}
      <Outlet />
    </div>
  );
};

export default MalkhanaNav;
