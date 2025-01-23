import { useContext } from "react";
import { MusicContext } from "../context/MusicProvider";

export function useMusicContext() {
  return useContext(MusicContext);
}

export default useMusicContext;
