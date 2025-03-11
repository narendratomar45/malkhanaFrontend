import React, { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import userImage from "../assets/images/user1.jpeg";

const Navbar = () => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div className="bg-[#7b5926] py-3 px-4 flex items-center justify-between text-white shadow-md">
      <div className="text-2xl cursor-pointer hover:opacity-80 transition ml-72">
        <GiHamburgerMenu />
      </div>

      <p className="uppercase font-bold text-lg tracking-wide text-center">
        Digital Malkhana
      </p>

      <div className="relative flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
          <img
            src={userImage}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          onClick={handleHide}
          className="cursor-pointer hover:opacity-80 transition"
        >
          <BsThreeDotsVertical />
        </div>

        {hide && (
          <div className="absolute top-12 right-0 bg-white text-black p-2 rounded-lg shadow-lg">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-md transition">
              <IoIosLogIn className="text-xl" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
