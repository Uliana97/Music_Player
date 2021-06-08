import styled from "styled-components";

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

export const Range = styled.input`
  width: 100%;
  padding: 1rem 0;
`;

export const Option = styled.div`
  cursor: pointer;
`;


