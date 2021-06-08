
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
  body, h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
        font-family: Helvetica, sans-serif;
      }
`;