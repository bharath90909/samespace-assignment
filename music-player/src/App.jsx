import MusicProvider from "./context/MusicProvider";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <MusicProvider>
      <AppLayout />
    </MusicProvider>
  );
}

export default App;
