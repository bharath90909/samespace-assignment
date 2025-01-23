import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Profile.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMusicContext } from "../hooks/useMusicContext";
function SideBar() {
  const { setIsModalOpen } = useMusicContext();
  return (
    <div className="flex flex-row items-center sm:flex-col justify-between sm:items-start">
      {/* Spotify Logo */}
      <div className="h-[40px] w-[133px]">
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Profile Image */}
      <div className=" hidden sm:block h-[48px] w-[48px] ">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full  object-coverrounded-full"
        />
      </div>

      {/* HamburgerMenu */}
      <div
        className="block sm:hidden h-[40px] w-[40px] text-white text-[40px]"
        onClick={() => setIsModalOpen(true)}
      >
        <RxHamburgerMenu />
      </div>
    </div>
  );
}

export default SideBar;
