import React, {useState, useRef} from "react";

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

export interface TTimeControl {
  currentTime: number;
  duration: number;
}

export const App: React.FC = () => {
  const [songs, setSongs] = useState<TCurrentSongType[]>(chillHop())
  const [currentSong, setCurrentSong] = useState<TCurrentSongType>(songs[0])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [timeControl, setTimeControl] = useState<TTimeControl>({
    currentTime: 0,
    duration: 0
  })

  const audioRef = useRef<HTMLAudioElement>(null)

  const handleAudioTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement>): void => {
    setTimeControl({
      ...timeControl, 
      currentTime: event.currentTarget.currentTime,
      duration: event.currentTarget.duration 
    })
  }

  const handlePlaying = (): void => {
    isPlaying ? audioRef?.current?.pause() : audioRef?.current?.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <Theme>
      <GlobalStyle />
      <AudioLibrary 
        songs={songs} 
        audioRef={audioRef} 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <Song currentSong={currentSong}/>
      <Player 
        timeControl={timeControl}
        setTimeControl={setTimeControl} 
        handlePlaying={handlePlaying} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
       />
      <audio onTimeUpdate={handleAudioTimeUpdate} onLoadedMetadata={handleAudioTimeUpdate} ref={audioRef} src={currentSong.audio}></audio>
    </Theme>
  );
};