import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SiezedVehicleBody = () => {
  const location = useLocation();
  const seizedLocation = location.pathname.startsWith("/seizedVehicle");

  return (
    <div className="w-full">
      {seizedLocation && (
        <div className=" flex justify-center gap-5 mx-auto">
          <Link to={"/seizedVehicle/mvActSeizure"}>
            <p>M.V. Act Seizure</p>
          </Link>
          <Link to={"/seizedVehicle/artoSeizure"}>
            <p>ARTO Seizure</p>
          </Link>
          <Link to={"/seizedVehicle/ipcVehicle"}>
            <p>IPC Seizure</p>
          </Link>
          <Link to={"/seizedVehicle/exciseVehicle"}>
            <p>Excise Seizure</p>
          </Link>
          <Link to={"/seizedVehicle/unclaimedVehicle"}>
            <p>Unclaimed Seizure</p>
          </Link>
          <Link to={"/seizedVehicle/seizureVehicle"}>
            <p>Seizure Vehicle</p>
          </Link>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default SiezedVehicleBody;
