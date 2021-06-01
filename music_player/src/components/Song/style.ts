import styled from "styled-components";

import {SongProps} from './Song'


export const SongWrapper = styled.div<SongProps>`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SongPicture = styled.div<SongProps>`
  
`;

export const SongName = styled.div<SongProps>`
  
`;

export const SongAuthor = styled.div<SongProps>`
  
`;