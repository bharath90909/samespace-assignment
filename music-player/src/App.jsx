import SideBar from "./components/SideBar";
import MusicSection from "./components/MusicSection";
import Player from "./components/Player";
import MusicProvider from "./context/MusicProvider";
function App() {
  return (
    <MusicProvider>
      <div className="container mx-auto border grid grid-cols-[20%_30%_50%] w-[85vw] h-[85vh] max-w-[85vw] max-h-[85vh] p-4 text-left">
        <SideBar />
        <MusicSection />
        <Player />
      </div>
    </MusicProvider>
  );
}

export default App;
