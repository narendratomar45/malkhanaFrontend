import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MalkhanaNav = () => {
  const location = useLocation();
  const malkhanaEntryLocation = location.pathname.startsWith("/malkhana");
  return (
    <div className="w-full">
      {malkhanaEntryLocation && (
        <div className="flex justify-center gap-5">
          <Link to={"/malkhana/malkhanaEntry"}>
            <div>Malkhana Entry</div>
          </Link>
          <Link to={"/malkhana/fslEntry"}>
            <div>Fsl Entry</div>
          </Link>
          <Link to={"/malkhana/kurkiEntry"}>
            <div>Kurki Entry</div>
          </Link>
          <Link to={"/malkhana/othersEntry"}>
            <div>Others Entry</div>
          </Link>
          <Link to={"/malkhana/unclaimedEntry"}>
            <div>Unclaimed Entry</div>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MalkhanaNav;
