import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import { PlayerWrapper, TimeControl, PlayControl, StartTime, Range, EndTime, Prev, Play, Next } from './style'

export type PlayerProps = {
  text?: string
  primary?: boolean
}

export const Player: React.FC <PlayerProps> = () => {
  return (
      <PlayerWrapper>
        <TimeControl>
          <StartTime>StartTime</StartTime>
          <Range type="range"></Range>
          <EndTime>EndTime</EndTime>
        </TimeControl>
        <PlayControl>
          <Prev><FontAwesomeIcon size="2x" icon={faAngleLeft} /></Prev>
          <Play><FontAwesomeIcon size="2x" icon={faPlay} /></Play>
          <Next><FontAwesomeIcon size="2x" icon={faAngleRight} /></Next>
        </PlayControl>
      </PlayerWrapper>
  ) 
}