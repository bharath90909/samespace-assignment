import React from "react";

function Nav({ currentTab, onTabChange }) {
  return (
    <div className="nav text-[22px] md:text-[24px] py-1 md:py-2 flex items-center gap-6 lg:leading-[32px] md:gap-[40px] sm:gap-4">
      {/* For You Tab */}
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

      {/* Top Tracks Tab */}
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
