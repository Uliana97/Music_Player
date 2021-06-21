import React, {useState, useRef, useEffect} from "react";

// Todo Path Alias, State Management, Dark theme, Random song
import {Theme} from "../../styling/theme";
import { GlobalStyle } from "./style";

import { chillHop } from "../../utils/utils"

import { Song } from "../../components/Song";
import { Player } from "../../components/Player";
import { AudioLibrary } from "../../components/AudioLibrary";
import { Header } from "../../components/Header";

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
  const [isOpenLibrary, setIsOpenLibrary] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('light')
  const [timeControl, setTimeControl] = useState<TTimeControl>({
    currentTime: 0,
    duration: 0,
    animationPercents: 0,
  })

  enum ETheme {
    DARK = "dark",
    LIGHT = "light",
  }

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

  const handleLibrarySwitch = (): void => setIsOpenLibrary(!isOpenLibrary);

  const handleThemeSwitch = (): void => theme === ETheme.LIGHT ? setTheme(ETheme.DARK) : setTheme(ETheme.LIGHT);

  const currentIndex = songs.findIndex(x => x.id === currentSong.id);

  useEffect(() => {
    // When changed current song
    // New array with changed active song
    const newSongsArray = songs.map((song) => {
      return {
        ...song,
        active: song.id === currentSong.id
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
    <Theme Theme={theme}>
      <GlobalStyle />
      <Header handleLibrarySwitch={handleLibrarySwitch} handleThemeSwitch={handleThemeSwitch} Theme={theme}/>
      <AudioLibrary 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isOpenLibrary={isOpenLibrary} 
      />
      <Song currentSong={currentSong} setIsOpenLibrary={setIsOpenLibrary}/>
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
        setIsOpenLibrary={setIsOpenLibrary}
       />
      <audio 
        onTimeUpdate={handleAudioTimeUpdate} 
        onLoadedMetadata={handleAudioTimeUpdate} 
        onEnded={() => setCurrentSong(songs[(currentIndex + 1) % songs.length])} 
        ref={audioRef} 
        src={currentSong?.audio}>
      </audio>
    </Theme>
  );
};