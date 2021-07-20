import styled from "styled-components";

import { device } from "styling/breakpoints";


export const SongWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media ${device.tablet} {
    min-height: 50vh;
  }
`;

export const SongPicture = styled.img`
  width: 20%;
  border-radius: 50%;

  @media ${device.tablet} {
    width: 40%;
  }
`;

export const SongName = styled.h1`
  padding: 2rem 1rem 1rem 1rem;
  color: ${({ theme: { colors } }) => colors.text};

  @media ${device.tablet} {
    padding: 1rem;
  }
`;

export const SongArtist = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  color: ${({ theme: { colors } }) => colors.text};
`;