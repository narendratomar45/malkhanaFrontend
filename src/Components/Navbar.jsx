import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-[#7b5926] py-2 flex justify-around text-white ">
      <div className="text-2xl">
        <GiHamburgerMenu />
      </div>
      <p className=" uppercase font-bold text-center">Digital Malkhana</p>
      <div className="flex justify-center items-center">
        <div className=" text-2xl">
          <IoIosLogIn />
        </div>
        <div className=" w-12 h-12 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
