import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainColor: "rgb(183, 160, 186)",
    text: "rgb(45, 45, 45)"
  },
  fonts: ["Libre Caslon Display", "serif"],
  fontSizes: {
    xs: "0.7rem",
    s: "1rem",
    m: "1.5rem",
    extraM: "2rem",
    l: "3rem",
    xl: "4rem",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;