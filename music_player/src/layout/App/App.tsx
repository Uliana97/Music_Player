import React, {useState, useRef, useEffect} from "react";

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
  animationPercents: number;
}

export const App: React.FC = () => {
  const [songs, setSongs] = useState<TCurrentSongType[]>(chillHop())
  const [currentSong, setCurrentSong] = useState<TCurrentSongType>(songs[0])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [timeControl, setTimeControl] = useState<TTimeControl>({
    currentTime: 0,
    duration: 0,
    animationPercents: 0,
  })

  // Reference on audio element
  const audioRef = useRef<HTMLAudioElement>(null)

  // onTimeUpdate
  const handleAudioTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement>): void => {
    const roundedCurrentTime = Math.round(timeControl.currentTime)
    const roundedDuration = Math.round(timeControl.duration)
    const animation = Math.round((roundedCurrentTime / roundedDuration) * 100)
    setTimeControl({
      ...timeControl, 
      currentTime: event.currentTarget.currentTime,
      duration: event.currentTarget.duration,
      animationPercents: animation
    })
  }

  // When click on "Play" button we want to pause/play music
  const handlePlaying = (): void => {
    isPlaying ? audioRef?.current?.pause() : audioRef?.current?.play();
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    // When changed current song
    // New array with changed active song
    const newSongsArray = songs.map((i) => {
      return {
        ...i,
        active: i.id === currentSong.id ? true : false
      }
    })
    // Set new array
    setSongs(newSongsArray);

    // If music was played we want to play currentSing too
    // audioRef.current?.play() return Promise 
    isPlaying && audioRef.current?.play()
    .then(() => audioRef.current?.play())
    .catch((e) => console.log(e))
    
  }, [currentSong])

  return (
    <Theme>
      <GlobalStyle />
      <AudioLibrary 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
      />
      <Song currentSong={currentSong}/>
      <Player 
        timeControl={timeControl}
        setTimeControl={setTimeControl} 
        handlePlaying={handlePlaying} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        currentSong={currentSong}
        songs={songs} 
        setCurrentSong={setCurrentSong}
       />
      <audio onTimeUpdate={handleAudioTimeUpdate} onLoadedMetadata={handleAudioTimeUpdate} ref={audioRef} src={currentSong?.audio}></audio>
    </Theme>
  );
};