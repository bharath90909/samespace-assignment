import React from "react";
import SideBar from "./SideBar";
import MusicSection from "./MusicSection";
import Player from "./Player";
import { useMusicContext } from "../hooks/useMusicContext";

function AppLayout() {
  const { currentSong } = useMusicContext();
  return (
    <div
      className="app-container"
      style={{
        background: currentSong
          ? `linear-gradient(125deg, ${currentSong.accent}, #1a0f00)`
          : `linear-gradient(180deg, #1E1E2E 0%, #000000 100%)`,
      }}
    >
      <div className="border grid lg:grid-cols-[20%_30%_50%] md:grid-cols-[20%_35%_45%] sm:grid-cols-[15%_40%_45%] w-full h-full md:w-[85vw] md:h-[85vh]  p-6 md:p-4 text-left md:rounded-2xl shadow-2xl">
        <SideBar />
        <MusicSection />
        <Player />
      </div>
    </div>
  );
}

export default AppLayout;
