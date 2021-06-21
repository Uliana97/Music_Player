
import { createGlobalStyle } from "styled-components";

import {ThemeType} from "../../styling/theme";

type Props = {
  theme: ThemeType
}

export const GlobalStyle = createGlobalStyle<Props>`
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
    background-color: ${({ theme: { colors } }) => colors.bg};
  }
  body, h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
        font-family: Helvetica, sans-serif;
      }
`;