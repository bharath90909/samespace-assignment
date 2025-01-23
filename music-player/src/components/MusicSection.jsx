import React, { useContext, useEffect, useState } from "react";
import { MusicContext } from "../context/MusicProvider";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import SongList from "./SongList";

function MusicSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("For You");
  const { filterSongs } = useContext(MusicContext);

  // Update filters whenever searchQuery or activeTab changes
  useEffect(() => {
    filterSongs(activeTab, searchQuery);
  }, [activeTab, searchQuery]);

  return (
    <div className="border px-4 sm:h-[95vh] hidden md:h-[80vh] sm:block sm:px-6 sm:ml-4 md:ml-0">
      <div className="flex flex-col h-full">
        <Nav currentTab={activeTab} onTabChange={setActiveTab} />
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
        <SongList />
      </div>
    </div>
  );
}

export default MusicSection;
