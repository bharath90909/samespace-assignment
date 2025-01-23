import React from "react";

const Shimmer = () => {
  return (
    <div className="song-list shimmer">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-item flex items-center gap-4 py-[18px] animate-pulse"
          >
            <div className="shimmer-img bg-[rgba(255,255,255,0.1)] w-12 h-12 rounded-full" />
            <div className="shimmer-details flex-1">
              <div className="shimmer-title bg-[rgba(255,255,255,0.1)] h-4 w-[60%] rounded-md mb-2" />
              <div className="shimmer-subtitle bg-[rgba(255,255,255,0.1)] h-3 w-[40%] rounded-md" />
            </div>
            <div className="shimmer-duration bg-[rgba(255,255,255,0.1)] h-4 w-8 rounded-md" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
