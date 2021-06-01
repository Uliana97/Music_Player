
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
     box-sizing: border-box;
    }
  ul,
  li,
   p {
      padding: 0;
      margin: 0;
      }
  html,
  body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        font-family: Helvetica, sans-serif;
      }
`;