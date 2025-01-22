import React, { createContext, useState, useEffect } from "react";

export const MusicContext = createContext();

function MusicProvider({ children }) {
  const [allSongs, setAllSongs] = useState([]); // Original list from API
  const [filteredSongs, setFilteredSongs] = useState([]); // Filtered songs
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to fetch song duration
  async function fetchSongDuration(song) {
    return new Promise((resolve) => {
      const audio = new Audio(song.url);
      audio.onloadedmetadata = () => {
        song.duration = Math.floor(audio.duration); // Add duration in seconds
        resolve(song);
      };
    });
  }

  // Fetch songs with duration
  async function fetchSongs() {
    try {
      const response = await fetch("https://cms.samespace.com/items/songs");
      const data = await response.json();
      const fetchedSongs = data.data;

      // Fetch duration for each song
      const songsWithDuration = await Promise.all(
        fetchedSongs.map((song) => fetchSongDuration(song))
      );

      setAllSongs(songsWithDuration); // Store the original list
      setFilteredSongs(songsWithDuration); // Initialize the filtered list
      setLoading(false);
    } catch (error) {
      console.error("Error fetching songs:", error);
      setLoading(false);
    }
  }

  // Filter songs based on tab and query
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
    setFilteredSongs(filtered); // Update filtered songs
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        songs: filteredSongs, // Expose filteredSongs as songs
        currentSong,
        setCurrentSong,
        loading,
        filterSongs, // Expose filterSongs function
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export default MusicProvider;
