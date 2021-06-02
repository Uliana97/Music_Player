import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    text: "rgb(45, 45, 45)"
  },
  fonts: ["Libre Caslon Display", "serif"],
  fontSizes: {
    xs: "0.875rem",
    s: "1rem",
    m: "1.125rem",
    extraM: "2rem",
    l: "3.4375rem",
    xl: "4.375rem",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;