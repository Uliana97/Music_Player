import styled from "styled-components";


export const SongWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

export const SongPicture = styled.img`
  width: 20%;
  border-radius: 50%;
`;

export const SongName = styled.h1`
  padding: 2rem 1rem 1rem 1rem;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const SongArtist = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  color: ${({ theme: { colors } }) => colors.text};
`;