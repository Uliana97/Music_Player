import React, {useState} from "react";

import Theme from "../../styling/theme";
import { GlobalStyle } from "./style";
import { Song } from "../../components/Song";
import { Player } from "../../components/Player";
import { chillHop } from "../../utils/utils"

export type CurrentSongType = {
  name: string
  cover: string
  artist: string
  audio: string
  color: string[]
  id: string
  active: boolean
}

export const App: React.FC = () => {
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState<CurrentSongType>(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Theme>
      <GlobalStyle />
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </Theme>
  );
};