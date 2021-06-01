import styled from "styled-components";

import {PlayerProps} from './Player'


export const PlayerWrapper = styled.div<PlayerProps>`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControl = styled.div<PlayerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const PlayControl = styled.div<PlayerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const Time = styled.div<PlayerProps>`
  padding: 1rem;
`;

export const Range = styled.input<PlayerProps>`
  width: 100%;
  padding: 1rem 2rem;
`;

export const Option = styled.div<PlayerProps>`
  cursor: pointer;
`;


