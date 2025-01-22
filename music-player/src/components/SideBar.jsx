import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Profile.png";

function SideBar() {
  return (
    <div className="flex flex-col justify-between items-start">
      <div className="h-[40px] w-[133px]">
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="h-[48px] w-[48px] ">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full  object-coverrounded-full"
        />
      </div>
    </div>
  );
}

export default SideBar;
