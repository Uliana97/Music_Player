import React from "react";
import { ThemeProvider } from "styled-components";

export interface TTheme {
  Theme: string
}

const fontSizes = {
  xs: "0.7rem",
  s: "1rem",
  m: "1.5rem",
  extraM: "2rem",
  l: "3rem",
  xl: "4rem",
} 

const darkTheme = {
  colors: {
    mainColor: "rgb(52, 46, 54);",
    text: "#af8ba7",
    bg: "rgb(54, 54, 65)",
    libraryShadow: '#202020',
    active: 'rgb(80, 63, 85)',
    track: 'rgb(64, 64, 79);',
    player: 'rgb(172, 141, 180)',
    LibrarySwitcher: '#c07199'
  },
  fontSizes
}; 

const lightTheme = {
  colors: {
    mainColor: "rgb(183, 160, 186)",
    text: "rgb(45, 45, 45)",
    bg: "rgb(255, 255, 255)",
    libraryShadow: '#C1C1C1',
    active: 'rgb(218, 199, 221)', 
    track: '#f3f3f3',
    player: 'rgb(172, 141, 180)',
    LibrarySwitcher: '#ff0081'
  },
  fontSizes
};

const theme: any = {
 dark: darkTheme,
 light: lightTheme
};

export type ThemeType = typeof theme['dark'];

export const Theme: React.FC<TTheme> = ({ children, Theme }) => (
  <ThemeProvider theme={theme[Theme]}>{children}</ThemeProvider>
);
