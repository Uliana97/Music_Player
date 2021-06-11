import styled from "styled-components";

type AnimationTrackProps = {
  animation: number;
}

type TrackProps = {
  gradient: string[];
}

export const PlayerWrapper = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const PlayControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const Time = styled.div`
  padding: 1rem;
`;

export const Track = styled.div<TrackProps>`
  width: 100%;
  height: 1rem;
  background: ${({ gradient }) => `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`};
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

export const AnimationTrack = styled.div<AnimationTrackProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f3f3f3;
  pointer-events: none;
  transform: ${({ animation }) => `translateX(${animation}%)`};
`;

export const Range = styled.input`
  width: 100%;
  cursor: pointer;
  background: transparent;
  -webkit-appearance: none;
  z-index: 1000;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
  }

  &:focus {
    outline: none;
  }
`;

export const Option = styled.div`
  cursor: pointer;
`;


