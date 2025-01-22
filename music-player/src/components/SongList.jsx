import React, { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicProvider";

const SongList = () => {
  const { songs, setCurrentSong, loading } = useContext(MusicContext);

  if (loading) {
    return <p>Loading songs...</p>;
  }

  return (
    <div className="song-list overflow-y-auto flex-1 ">
      {songs && songs.length > 0 ? (
        songs.map((song) => (
          <div
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className="song-item flex items-center gap-4 py-[16px]  cursor-pointer"
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              className="song-cover w-12 h-12 rounded-full object-cover"
            />
            <div className="song-details flex-1">
              <h4 className="text-[18px] font-regular">{song.name}</h4>
              <p className="text-[14px] font-regular  text-[rgba(255,255,255,0.4)]">
                {song.artist}
              </p>
            </div>
            <p className="song-duration text-[18px] font-regular text-[rgba(255,255,255,0.4)]">
              {formatDuration(song.duration)}
            </p>
          </div>
        ))
      ) : (
        <p className="text-white font-regular">No songs found.</p>
      )}
    </div>
  );
};

// Helper to format duration
const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default SongList;
