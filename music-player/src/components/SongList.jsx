import React, { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicProvider";
import Shimmer from "../ui/Shimmer";

const SongList = () => {
  const { songs, setCurrentSong, loading } = useContext(MusicContext);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="song-list overflow-y-auto flex-1  border">
      {songs && songs.length > 0 ? (
        songs.map((song) => (
          <div
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className="song-item flex items-center gap-4 py-[18px]  cursor-pointer"
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              className="song-cover w-12 h-12 rounded-full object-cover"
            />
            <div className="song-details flex-1">
              <h4 className="md:text-[18px] text-[16px] font-regular">
                {song.name}
              </h4>
              <p className="lg:text-[14px] text-[15px] font-regular  text-[rgba(255,255,255,0.4)]">
                {song.artist}
              </p>
            </div>
            <p className="song-duration text-[18px] font-regular text-[rgba(255,255,255,0.4)]">
              {formatDuration(song.duration)}
            </p>
          </div>
        ))
      ) : (
        <p className=" text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          No songs found.
        </p>
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
