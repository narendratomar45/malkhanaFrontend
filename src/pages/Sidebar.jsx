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

const Sidebar = () => {
  return (
    <div className="bg-[#7b5926] w-52 text-white min-h-screen space-y-3  ">
      <div className=" flex items-center gap-3">
        <MdDashboardCustomize />
        <p>Dashboard</p>
      </div>
      <div className="flex items-center gap-3">
        <FaWarehouse />
        <p>Malkhana Entry</p>
      </div>
      <div className="flex items-center gap-3">
        <MdGavel />
        <p>Siezed Vehicle Entry</p>
      </div>{" "}
      <div className="flex items-center gap-3">
        <FaFileContract />
        <p>Summon Entry</p>
      </div>
      <div className="flex items-center gap-3">
        <FaExchangeAlt />
        <p>Malkhana Movement</p>
      </div>
      <div className="flex items-center gap-3">
        <FaDoorOpen />
        <p>Malkhana Release</p>
      </div>
      <div className="flex items-center gap-3">
        <FaBarcode />
        <p>Generate Barcode</p>
      </div>
      <div className="flex items-center gap-3">
        <TbReportAnalytics />
        <p>Reports</p>
      </div>
      <div className="flex items-center gap-3">
        <FaFileImport />
        <p>Imports data</p>
      </div>
      <div className="flex items-center gap-3">
        <MdManageAccounts />
        <p>Manage Users</p>
      </div>
      <div className="flex items-center gap-3">
        <IoSettings />
        <p>Settings</p>
      </div>
      <div className="flex items-center gap-3">
        <MdHelpCenter />
        <p>Help</p>
      </div>
    </div>
  );
};

export default Sidebar;
