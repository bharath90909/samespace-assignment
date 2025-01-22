import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FaForward,
  FaBackward,
  FaPlayCircle,
  FaPauseCircle,
  FaVolumeUp,
} from "react-icons/fa";
import { MusicContext } from "../context/MusicProvider";

const Player = () => {
  const { songs, currentSong, setCurrentSong } = useContext(MusicContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Sync audio source with the current song
  useEffect(() => {
    if (currentSong) {
      if (!audioRef.current) {
        audioRef.current = new Audio(currentSong.url);
      } else {
        audioRef.current.src = currentSong.url;
        audioRef.current.load();
      }

      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  // Update current time while the song plays
  useEffect(() => {
    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!currentSong || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Next Song
  const handleNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length; // Loop back to first
    setCurrentSong(songs[nextIndex]);
  };

  // Handle Previous Song
  const handlePrevious = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length; // Loop back to last
    setCurrentSong(songs[previousIndex]);
  };

  // Seek to a specific time
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const seekerStyle = {
    background: `linear-gradient(to right, white ${
      (currentTime / duration) * 100
    }%, rgba(255, 255, 255, 0.4) ${(currentTime / duration) * 100}%)`,
  };

  if (!currentSong) {
    return <p>No song is currently playing</p>;
  }

  return (
    <div className="h-[80vh] px-[100px] py-[50px] ">
      <div className="player flex flex-col h-full">
        <div className="player-info">
          <h4 className="font-bold text-[32px] mb-2">{currentSong.name}</h4>
          <p className="font-regular  text-[rgba(255,255,255,0.4)]">
            {currentSong.artist}
          </p>
        </div>
        <div className="player-img mt-7 mb-2 rounded-lg w-full overflow-hidden flex-1">
          <img
            src={`https://cms.samespace.com/assets/${currentSong.cover}`}
            alt={currentSong.name}
            className="player-cover w-full h-full object-cover"
          />
        </div>
        <div className="player-seeker w-full ">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="w-full seeker-range"
            style={seekerStyle}
          />
        </div>
        <div className="player-controls my-4 flex flex-row gap-20 text-[28px] justify-between items-center">
          <div className="settings control-button">
            <button className="flex flex-row justify-center items-center">
              ...
            </button>
          </div>
          <div className="controls control-button flex-1 flex flex-row justify-between bg-none">
            <button onClick={handlePrevious} className="text-[25px]">
              <FaBackward />
            </button>
            <button
              onClick={togglePlayPause}
              className="control-button bg-white text-black"
            >
              {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <button onClick={handleNext} className="text-[25px]">
              <FaForward />
            </button>
          </div>
          <div className="volume control-button">
            <button>
              <FaVolumeUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
