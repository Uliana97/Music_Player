import styled, {keyframes} from "styled-components";

import { device } from "../../styling/breakpoints";

const slidebg = keyframes`

to {
    background-position:20vw;
  }
`;

export const ThemeSwitcher = styled.div`
  color: ${({ theme: { colors } }) => colors.LibrarySwitcher};
  cursor: pointer;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};

  &:hover{
   color: ${({ theme: { colors } }) => colors.text};
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 55%;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    max-width: 80%;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme: { colors } }) => colors.LibrarySwitcher};

  @media ${device.tablet} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  }
`;

export const LibrarySwitcher = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme: { colors } }) => colors.LibrarySwitcher};
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
  z-index: 101;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};

  & span {
    display: inline-block;
    margin-left: 5px;
  }

  &:focus {
    outline: 0;
  }

  &:hover{
   background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:${slidebg} 5s linear infinite;
  }

  &:active{
    transform: scale(0.9);
    background-color: darken($button-bg, 5%);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }

  @media ${device.tablet} {
    padding: 0.8rem 1rem;
  }
 
`;
