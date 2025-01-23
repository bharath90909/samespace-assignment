import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className="w-full h-[48px] my-4 relative">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search Song, Artist"
        className="w-full h-full py-2 px-4 bg-[rgba(255,255,255,0.4)]  rounded-md placeholder-[rgba(255,255,255,0.4)] outline-none "
      />
      <div
        className="absolute top-[50%] right-4 text-[20px] "
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <HiMagnifyingGlass />
      </div>
    </div>
  );
};

export default SearchBar;
