// import React from "react";
// import { FaUsersLine } from "react-icons/fa6";
// import {
//   BsFileEarmarkBarGraph,
//   BsFileEarmarkRuled,
//   BsFileEarmarkText,
// } from "react-icons/bs";
// import { RiFileChartLine, RiFileList2Line } from "react-icons/ri";
// import { ImFileText } from "react-icons/im";
// import { TbFileDescription } from "react-icons/tb";

// const Dashboard = () => {
//   const buttonData = [
//     {
//       totalData: "Total Users",
//       totalCount: "30",
//       icon: <FaUsersLine className="text-5xl text-blue-600" />,
//     },
//     {
//       totalData: "Total Records",
//       totalCount: "40",
//       icon: <BsFileEarmarkBarGraph className="text-5xl text-green-500" />,
//     },
//     {
//       totalData: "Total Malkhana Entry",
//       totalCount: "50",
//       icon: <BsFileEarmarkRuled className="text-5xl text-red-500" />,
//     },
//     {
//       totalData: "Total Vehicle Entry",
//       totalCount: "35",
//       icon: <BsFileEarmarkText className="text-5xl text-yellow-500" />,
//     },
//     {
//       totalData: "Total Movement Entry",
//       totalCount: "30",
//       icon: <RiFileChartLine className="text-5xl text-purple-500" />,
//     },
//     {
//       totalData: "Total Return Entry",
//       totalCount: "45",
//       icon: <RiFileList2Line className="text-5xl text-teal-500" />,
//     },
//     {
//       totalData: "Total Release Entry",
//       totalCount: "20",
//       icon: <ImFileText className="text-5xl text-indigo-500" />,
//     },
//     {
//       totalData: "Total Summon Entry",
//       totalCount: "60",
//       icon: <TbFileDescription className="text-5xl text-pink-500" />,
//     },
//   ];

//   return (
//     <div className="w-full p-5">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//         Dashboard Overview
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {buttonData?.map((button, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg py-4 px-1 flex flex-col border border-gray-700 hover:shadow-lg transition duration-300"
//           >
//             <div className="flex justify-center gap-3">
//               {button.icon}
//               <h3 className="text-xl font-medium text-gray-950">
//                 {button.totalData}
//               </h3>
//             </div>
//             <div className="text-center">
//               <p className="text-3xl font-bold text-gray-900">
//                 {button.totalCount}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import {
  BsFileEarmarkBarGraph,
  BsFileEarmarkRuled,
  BsFileEarmarkText,
} from "react-icons/bs";
import { RiFileChartLine, RiFileList2Line } from "react-icons/ri";
import { ImFileText } from "react-icons/im";
import { TbFileDescription } from "react-icons/tb";

const Dashboard = () => {
  const buttonData = [
    {
      totalData: "Total Users",
      totalCount: "30",
      icon: <FaUsersLine className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      totalData: "Total Records",
      totalCount: "40",
      icon: <BsFileEarmarkBarGraph className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      totalData: "Total Malkhana Entry",
      totalCount: "50",
      icon: <BsFileEarmarkRuled className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
      totalData: "Total Vehicle Entry",
      totalCount: "35",
      icon: <BsFileEarmarkText className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    },
    {
      totalData: "Total Movement Entry",
      totalCount: "30",
      icon: <RiFileChartLine className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    {
      totalData: "Total Return Entry",
      totalCount: "45",
      icon: <RiFileList2Line className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-teal-500 to-teal-700",
    },
    {
      totalData: "Total Release Entry",
      totalCount: "20",
      icon: <ImFileText className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700",
    },
    {
      totalData: "Total Summon Entry",
      totalCount: "60",
      icon: <TbFileDescription className="text-white text-5xl" />,
      bgColor: "bg-gradient-to-r from-pink-500 to-pink-700",
    },
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {buttonData.map((button, index) => (
          <div
            key={index}
            className={`rounded-xl py-6 px-4 flex flex-col items-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out ${button.bgColor}`}
          >
            <div className="flex gap-2">
              <div className="mb-3">{button.icon}</div>
              <h3 className="text-lg font-semibold text-center">
                {button.totalData}
              </h3>
            </div>
            <p className="text-4xl font-bold mt-2">{button.totalCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
