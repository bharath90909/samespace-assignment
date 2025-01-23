import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Profile.png";
import { RxHamburgerMenu } from "react-icons/rx";
function SideBar() {
  return (
    <div className=" border flex flex-row items-center sm:flex-col justify-between sm:items-start">
      <div className="h-[40px] w-[133px]">
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className=" hidden sm:block h-[48px] w-[48px] ">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full  object-coverrounded-full"
        />
      </div>
      <div className="block sm:hidden h-[48px] w-[48px] text-white text-[40px]">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}

export default SideBar;
