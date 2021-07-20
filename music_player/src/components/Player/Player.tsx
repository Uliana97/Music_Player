import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import {TTimeControl, TCurrentSongType} from 'layout/App/App'
import { PlayerWrapper, TimeControl, PlayControl, Time, Range, Option, Track, AnimationTrack} from './style'
export interface TPlayerComponentType {
  timeControl: TTimeControl;
  currentSong:TCurrentSongType;
  songs: TCurrentSongType[];
  setTimeControl: React.Dispatch<TTimeControl>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<boolean>;
  setCurrentSong: React.Dispatch<TCurrentSongType>;
  setIsOpenLibrary: React.Dispatch<boolean>;
  handlePlaying: () => void;
}

enum Direction {
  Next,
  Prev,
}

export const Player: React.FC <TPlayerComponentType> = ({isPlaying, handlePlaying, timeControl, setTimeControl, audioRef, currentSong, songs, setCurrentSong, setIsOpenLibrary}) => {
  // We change currentTime when range was changed
  const handleChangeTime = (event: React.SyntheticEvent<HTMLInputElement>): React.RefObject<HTMLAudioElement> => {
    setTimeControl({
      ...timeControl, 
      currentTime: +event.currentTarget.value,
    })
    // Also we need to change time of played music
    // @ts-ignore: Unreachable code error
    return audioRef.current.currentTime = +event.currentTarget.value;
  }

  // Set prev or next song when click on arrors
  const handleSkipSong = (direction: number): void => {
    const currentIndex = songs.findIndex(x => x.id === currentSong.id)
    if (direction === Direction.Next) {
      // % helps us to start from zero when array ends
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    } 
    else {
      // If index is zero we want to switch on last song
      currentIndex === 0 
      ? 
      setCurrentSong(songs[songs.length - 1])
      :
      setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }
  }

  const formatTime = (time: number): string => {
    return (
      time ? Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) : "0:00"
    )
  }

  const {duration, currentTime, animationPercents} = timeControl;

  return (
      <PlayerWrapper onClick={() => setIsOpenLibrary(false)}>
        <TimeControl>
          <Time className="startTime">{formatTime(currentTime)}</Time>
          <Track gradient={currentSong.color}>
            <Range type="range" onChange={handleChangeTime} min={0} max={duration} value={currentTime}/>
            <AnimationTrack animation={animationPercents}/>
          </Track>
          <Time className="endTime">{formatTime(duration - currentTime)}</Time>
        </TimeControl>
        <PlayControl>
          <Option className="prev" onClick={() => handleSkipSong(Direction.Prev)}><FontAwesomeIcon size="2x" icon={faAngleLeft} /></Option>
          <Option className="start" onClick={handlePlaying}>
            <FontAwesomeIcon size="2x" icon={isPlaying ? faPause : faPlay} />
          </Option>
          <Option className="next" onClick={() => handleSkipSong(Direction.Next)}><FontAwesomeIcon size="2x" icon={faAngleRight} /></Option>
        </PlayControl>
      </PlayerWrapper>
  ) 
}