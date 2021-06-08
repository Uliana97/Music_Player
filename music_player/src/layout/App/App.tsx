import React, {useState} from "react";

import Theme from "../../styling/theme";
import { GlobalStyle } from "./style";
import { Song } from "../../components/Song";
import { Player } from "../../components/Player";
import { chillHop } from "../../utils/utils"
import { AudioLibrary } from "../../components/AudioLibrary";

export interface TCurrentSongType {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

export const App: React.FC = () => {
  const [songs, setSongs] = useState<TCurrentSongType[]>(chillHop())
  const [currentSong, setCurrentSong] = useState<TCurrentSongType>(songs[0])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <Theme>
      <GlobalStyle />
      <AudioLibrary songs={songs}/>
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </Theme>
  );
};