import React from "react";

function Nav({ currentTab, onTabChange }) {
  return (
    <div className="nav flex py-2 items-center text-[24px] leading-[32px] gap-[40px]">
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
