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
  }, [activeTab, searchQuery, filterSongs]);

  return (
    <div className="px-4 h-[80vh] flex flex-col">
      <Nav currentTab={activeTab} onTabChange={setActiveTab} />
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <SongList />
    </div>
  );
}

export default MusicSection;
