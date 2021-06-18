import styled from "styled-components";

import { device } from "../../styling/breakpoints";

type LibrarySongWrapperProps = {
  isActive: boolean;
}

type LibraryWrapperProps = {
  isOpenLibrary: boolean;
}

export const LibraryWrapper = styled.div<LibraryWrapperProps>`
  position: fixed;
  z-index: 100;
  background: white;
  width: 25%;
  top: 0;
  left: -25%;
  height: 100%;
  overflow-y: auto;
  -webkit-box-shadow: 5px 0px 15px 0px #C1C1C1; 
  box-shadow: 5px 0px 15px 0px #C1C1C1;
  transform: ${({ isOpenLibrary }) => isOpenLibrary && 'translateX(100%)'};
  transition: transform ease-in 0.1s;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  @media ${device.laptop} {
    width: 35%;
    left: -35%;
  } 

  @media ${device.tablet} {
    width: 55%;
    left: -55%;
  }

  @media ${device.mobileM} {
    width: 80%;
    left: -80%;
  }
`;

export const LibrarySongWrapper = styled.div<LibrarySongWrapperProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.text};
  background-color: ${({ isActive }) => isActive && 'rgb(218 199 221)'};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.mainColor};
  }
`;

export const ArtistInfo = styled.div`
  margin-left: 1rem;
`;

export const LibrarySongPicture = styled.img`
  width: 35%;
  height: 35%;
`;

export const LibrarySongName = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  margin-bottom: 0.3rem;
`;

export const LibrarySongArtist = styled.h4`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
`;