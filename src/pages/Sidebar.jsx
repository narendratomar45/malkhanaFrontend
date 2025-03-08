import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaFileImport } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdHelpCenter } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const dashboardPath = location.pathname.startsWith("/");

  return (
    <div className="flex items-center gap-3">
      {dashboardPath && (
        <div className="bg-[#7b5926] w-52 text-white min-h-screen ">
          <Link to={"/dashboard"}>
            <div className="flex items-center gap-3 mt-12">
              <MdDashboardCustomize />
              <p>Dashboard</p>
            </div>
          </Link>

          <Link to={"/malkhana"}>
            <div className="flex items-center gap-3 mt-4">
              <FaWarehouse />
              <p>Malkhana Entry</p>
            </div>
          </Link>
          <Link to={"/seizedVehicle"}>
            <div className="flex items-center gap-3 mt-4">
              <MdGavel />
              <p>Seized Vehicle Entry</p>
            </div>
          </Link>
          <Link to={"/summonEntry"}>
            <div className="flex items-center gap-3 mt-4">
              <FaFileContract />
              <p>Summon Entry</p>
            </div>
          </Link>
          <Link to={"/malkhanaMovement"}>
            <div className="flex items-center gap-3 mt-4">
              <FaExchangeAlt />
              <p>Malkhana Movement</p>
            </div>
          </Link>

          <Link to={"/malkhanaRelease"}>
            <div className="flex items-center gap-3 mt-4">
              <FaDoorOpen />
              <p>Malkhana Release</p>
            </div>
          </Link>
          <Link to={"/generateBarcode"}>
            <div className="flex items-center gap-3 mt-4">
              <FaBarcode />
              <p>Generate Barcode</p>
            </div>
          </Link>
          <Link to={"/reports"}>
            <div className="flex items-center gap-3 mt-4">
              <TbReportAnalytics />
              <p>Reports</p>
            </div>
          </Link>
          <Link to={"/importData"}>
            <div className="flex items-center gap-3 mt-4">
              <FaFileImport />
              <p>Imports data</p>
            </div>
          </Link>
          <Link to={"/manageUsers"}>
            <div className="flex items-center gap-3 mt-4">
              <MdManageAccounts />
              <p>Manage Users</p>
            </div>
          </Link>
          <Link to={"/setting"}>
            <div className="flex items-center gap-3 mt-4">
              <IoSettings />
              <p>Settings</p>
            </div>
          </Link>
          <Link to={"/help"}>
            <div className="flex items-center gap-3 mt-4">
              <MdHelpCenter />
              <p>Help</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
