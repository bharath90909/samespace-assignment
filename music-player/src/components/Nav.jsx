import React from "react";

function Nav({ currentTab, onTabChange }) {
  return (
    <div className="nav flex md:py-2 py-1 items-center md:text-[24px] text-[22px] lg:leading-[32px] md:gap-[40px] sm:gap-4">
      <button
        onClick={() => onTabChange("For You")}
        className={`${
          currentTab === "For You"
            ? "text-white font-bold"
            : "text-[rgba(255,255,255,0.4)] font-bold"
        }`}
      >
        For You
      </button>
      <button
        onClick={() => onTabChange("Top Tracks")}
        className={`${
          currentTab === "Top Tracks"
            ? "text-white font-bold"
            : "text-[rgba(255,255,255,0.4)] font-bold"
        }`}
      >
        Top Tracks
      </button>
    </div>
  );
}

export default Nav;
