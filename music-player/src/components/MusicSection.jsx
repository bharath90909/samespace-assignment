import React, { useContext, useEffect, useState } from "react";
import { useMusicContext } from "../hooks/useMusicContext";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import SongList from "./SongList";

function MusicSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("For You");
  const { filterSongs } = useMusicContext();

  // Updating songlist whenever searchQuery or activeTab changes
  useEffect(() => {
    filterSongs(activeTab, searchQuery);
  }, [activeTab, searchQuery]);

  return (
    <div className="px-4 sm:h-[95vh] md:h-[80vh] sm:block sm:px-6 sm:ml-4 md:ml-0">
      <div className="flex flex-col h-full">
        <Nav currentTab={activeTab} onTabChange={setActiveTab} />
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
        <SongList />
      </div>
    </div>
  );
}

export default MusicSection;
