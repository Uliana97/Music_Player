import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import {TTimeControl} from '../../layout/App/App'
import { PlayerWrapper, TimeControl, PlayControl, Time, Range, Option} from './style'
export interface TPlayerComponentType {
  timeControl: TTimeControl;
  setTimeControl: React.Dispatch<TTimeControl>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<boolean>;
  handlePlaying: () => void;
}

export const Player: React.FC <TPlayerComponentType> = ({isPlaying, handlePlaying, timeControl, setTimeControl, audioRef}) => {
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
      </PlayerWrapper>
  ) 
}