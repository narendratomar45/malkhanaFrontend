// import React from "react";
// import Sidebar from "./Sidebar";
// import Body from "./Body";

// const Home = () => {
//   return (
//     <div className="flex h-screen">
//       <div className="w-52 bg-gray-800 text-white sticky top-0 left-0 z-50">
//         <Sidebar />
//       </div>

//       <div className="flex-1">
//         <Body />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Home = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar (2 columns) */}
      <div className="col-span-2 bg-gray-800 text-white h-screen  sticky top-0 left-0 z-20">
        <Sidebar />
      </div>

      {/* Main Content (10 columns) */}
      <div className="col-span-10">
        <Body />
      </div>
    </div>
  );
};

export default Home;
