import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FaEllipsisH,
  FaForward,
  FaBackward,
  FaPlay,
  FaPause,
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
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] text-center animate-fade-in">
        <h1 className="text-white font-bold text-4xl md:text-6xl leading-[1.2]">
          Select A<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Song
          </span>
          <br />
          To Play
        </h1>
        <p className="text-[rgba(255,255,255,0.6)] mt-4 text-lg leading-6">
          Your music awaits! 🎵
        </p>
      </div>
    );
  }

  return (
    <div className="border h-[80vh] sm:h-[95vh] md:h-[80vh] md:h-[80vh] lg:px-[100px]  px-[40px] py-[40px] sm:py-[50px] lg:py-[50px]  md:py-[57px] md:px-[50px]">
      <div className="player flex flex-col h-full">
        <div className="player-info">
          <h4 className="font-bold md:text-[32px] text-[30px] mb-2">
            {currentSong.name}
          </h4>
          <p className="font-regular  text-[rgba(255,255,255,0.4)]">
            {currentSong.artist}
          </p>
        </div>
        <div className="player-img w-full  border mt-7 mb-2 rounded-lg  overflow-hidden flex-1 ">
          <img
            src={`https://cms.samespace.com/assets/${currentSong.cover}`}
            alt={currentSong.name}
            className="player-cover w-full h-full md:object-cover"
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
        <div className="player-controls my-4 flex flex-row justify-between items-center">
          <div className="settings ">
            <button className="control-button">
              <FaEllipsisH />
            </button>
          </div>

          <div className="controls flex-1 flex flex-row justify-evenly bg-transparent ">
            <button onClick={handlePrevious} className="text-[20px]">
              <FaBackward />
            </button>
            <button
              onClick={togglePlayPause}
              className="control-button bg-white text-black lg:text-[25px] text-[23px]"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleNext} className="text-[20px]">
              <FaForward />
            </button>
          </div>
          <div className="volume">
            <button className=" control-button">
              <FaVolumeUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
