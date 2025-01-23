import React from "react";

function IntroScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center animate-fadeIn">
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

export default IntroScreen;
