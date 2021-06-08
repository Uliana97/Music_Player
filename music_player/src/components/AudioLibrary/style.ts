import styled from "styled-components";

export const LibraryWrapper = styled.div`
  position: fixed;
  width: 25%;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  -webkit-box-shadow: 5px 0px 15px 0px #C1C1C1; 
  box-shadow: 5px 0px 15px 0px #C1C1C1;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  }
`;

export const LibrarySongWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.text};
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