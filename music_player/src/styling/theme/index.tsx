import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#0A345F",
    lightBlue: ' #174D85;',
    white: "#fff",
    vanil: "#F8F9FA;",
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