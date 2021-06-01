import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import { PlayerWrapper, TimeControl, PlayControl, Time, Range, Option} from './style'

export type PlayerProps = {
  text?: string
  primary?: boolean
}

export const Player: React.FC <PlayerProps> = () => {
  return (
      <PlayerWrapper>
        <TimeControl>
          <Time className="startTime">StartTime</Time>
          <Range type="range"></Range>
          <Time className="endTime">EndTime</Time>
        </TimeControl>
        <PlayControl>
          <Option className="prev"><FontAwesomeIcon size="2x" icon={faAngleLeft} /></Option>
          <Option className="start"><FontAwesomeIcon size="2x" icon={faPlay} /></Option>
          <Option className="next"><FontAwesomeIcon size="2x" icon={faAngleRight} /></Option>
        </PlayControl>
      </PlayerWrapper>
  ) 
}