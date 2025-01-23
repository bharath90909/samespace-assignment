import React, { createContext, useState, useEffect } from "react";

export const MusicContext = createContext();

function MusicProvider({ children }) {
  const [allSongs, setAllSongs] = useState([]); // Original list from API
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetching song duration
  async function fetchSongDuration(song) {
    return new Promise((resolve) => {
      const audio = new Audio(song.url);
      audio.onloadedmetadata = () => {
        song.duration = Math.floor(audio.duration);
        resolve(song);
      };
    });
  }

  // Fetching songs
  async function fetchSongs() {
    try {
      setError(false);
      const response = await fetch("https://cms.samespace.com/items/songs");
      const data = await response.json();
      const fetchedSongs = data.data;

      // Fetching duration for each song
      const songsWithDuration = await Promise.all(
        fetchedSongs.map((song) => fetchSongDuration(song))
      );

      setAllSongs(songsWithDuration);
      setFilteredSongs(songsWithDuration);
    } catch (error) {
      console.error("Error fetching songs:", error);
      setError(true);
    }
    setLoading(false);
  }

  // Filtering songs based on tab and query
  const filterSongs = (tab, query) => {
    let filtered = [...allSongs];
    if (tab !== "For You") {
      filtered = filtered.filter((song) => song.top_track);
    }
    if (query) {
      filtered = filtered.filter(
        (song) =>
          song.name.toLowerCase().includes(query.toLowerCase()) ||
          song.artist.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredSongs(filtered);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        songs: filteredSongs, // filteredSongs as songs
        filterSongs,
        currentSong,
        setCurrentSong,
        loading,
        error,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export default MusicProvider;
