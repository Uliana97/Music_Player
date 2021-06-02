import React, {Dispatch, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import {CurrentSongType} from '../../layout/App/App'
import { PlayerWrapper, TimeControl, PlayControl, Time, Range, Option} from './style'

export type PlayerComponentType = {
  currentSong: CurrentSongType
  isPlaying: boolean
  setIsPlaying: Dispatch<boolean>
}

export const Player: React.FC <PlayerComponentType> = ({currentSong: {audio}, isPlaying, setIsPlaying}) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playHandler = () => {
    isPlaying ? audioRef?.current?.pause() : audioRef?.current?.play();
    setIsPlaying(!isPlaying);
  }

  return (
      <PlayerWrapper>
        <TimeControl>
          <Time className="startTime">StartTime</Time>
          <Range type="range"></Range>
          <Time className="endTime">EndTime</Time>
        </TimeControl>
        <PlayControl>
          <Option className="prev"><FontAwesomeIcon size="2x" icon={faAngleLeft} /></Option>
          <Option className="start" onClick={playHandler}><FontAwesomeIcon size="2x" icon={faPlay} /></Option>
          <Option className="next"><FontAwesomeIcon size="2x" icon={faAngleRight} /></Option>
        </PlayControl>
        <audio ref={audioRef} src={audio}></audio>
      </PlayerWrapper>
  ) 
}