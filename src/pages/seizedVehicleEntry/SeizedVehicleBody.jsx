import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SiezedVehicleBody = () => {
  const location = useLocation();
  const seizedLocation = location.pathname.startsWith("/seizedVehicle");

  return (
    <div className="w-full">
      {seizedLocation && (
        <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 shadow-md rounded-lg mx-auto max-w-5xl">
          <Link
            to={"/seizedVehicle/mvActSeizure"}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            M.V. Act Seizure
          </Link>
          <Link
            to={"/seizedVehicle/artoSeizure"}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            ARTO Seizure
          </Link>
          <Link
            to={"/seizedVehicle/ipcVehicle"}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            IPC Seizure
          </Link>
          <Link
            to={"/seizedVehicle/exciseVehicle"}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Excise Seizure
          </Link>
          <Link
            to={"/seizedVehicle/unclaimedVehicle"}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
          >
            Unclaimed Seizure
          </Link>
          <Link
            to={"/seizedVehicle/seizureVehicle"}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
          >
            Seizure Vehicle
          </Link>
        </nav>
      )}

      <Outlet />
    </div>
  );
};

export default SiezedVehicleBody;
