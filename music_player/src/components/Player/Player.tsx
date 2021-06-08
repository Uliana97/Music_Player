import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import {TCurrentSongType} from '../../layout/App/App'
import { PlayerWrapper, TimeControl, PlayControl, Time, Range, Option} from './style'
export interface TPlayerComponentType {
  currentSong: TCurrentSongType;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<boolean>;
}
interface TTimeControl {
  currentTime: number;
  duration: number;
}

export const Player: React.FC <TPlayerComponentType> = ({currentSong: {audio}, isPlaying, setIsPlaying}) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [timeControl, setTimeControl] = useState<TTimeControl>({
    currentTime: 0,
    duration: 0
  })

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

  const handleChangeTime = (event: React.SyntheticEvent<HTMLInputElement>): React.RefObject<HTMLAudioElement> => {
    setTimeControl({
      ...timeControl, 
      currentTime: +event.currentTarget.value,
    })
    // @ts-ignore: Unreachable code error
    return audioRef.current.currentTime = +event.currentTarget.value;
  }

  const formatTime = (time: number): string => {
    return (
      time ? Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) : "0:00"
    )
  }

  const {duration, currentTime} = timeControl;

  return (
      <PlayerWrapper>
        <TimeControl>
          <Time className="startTime">{formatTime(currentTime)}</Time>
          <Range type="range" onChange={handleChangeTime} min={0} max={duration} value={currentTime}></Range>
          <Time className="endTime">{formatTime(duration - currentTime)}</Time>
        </TimeControl>
        <PlayControl>
          <Option className="prev"><FontAwesomeIcon size="2x" icon={faAngleLeft} /></Option>
          <Option className="start" onClick={handlePlaying}>
            <FontAwesomeIcon size="2x" icon={isPlaying ? faPause : faPlay} />
          </Option>
          <Option className="next"><FontAwesomeIcon size="2x" icon={faAngleRight} /></Option>
        </PlayControl>
        <audio onTimeUpdate={handleAudioTimeUpdate} onLoadedMetadata={handleAudioTimeUpdate} ref={audioRef} src={audio}></audio>
      </PlayerWrapper>
  ) 
}