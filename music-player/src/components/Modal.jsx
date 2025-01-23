import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useMusicContext } from "../hooks/useMusicContext";
import MusicSection from "./MusicSection";
import Profile from "../assets/Profile.png";

function Modal() {
  const { isModalOpen, setIsModalOpen, currentSong } = useMusicContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true);
    } else {
      // Delay to allow fade-out animation to complete
      const timeout = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) setIsModalOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isModalOpen && !isVisible) return null; // Do not render when completely closed

  return (
    <div
      className={`fixed inset-0 z-50 bg-opacity-1 flex items-center justify-center transition-opacity duration-300 ${
        isModalOpen ? "animate-fadeIn" : "animate-fadeOut"
      }`}
      style={{
        background: currentSong
          ? `linear-gradient(125deg, ${currentSong.accent}, #1a0f00)`
          : `linear-gradient(180deg, #1E1E2E 0%, #000000 100%)`,
      }}
    >
      <div className="w-full h-full sm:w-4/5 sm:h-4/5 rounded-lg overflow-auto p-4 ">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="h-[48px] w-[48px]">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <button
            className="h-[48px] w-[48px] text-white text-[40px]"
            onClick={() => setIsModalOpen(false)}
          >
            <IoClose />
          </button>
        </div>
        <MusicSection />
      </div>
    </div>
  );
}

export default Modal;
