import React from "react";

import Theme from "../../styling/theme";
import { GlobalStyle } from "./style";
import { Song } from "../../components/Song";
import { Player } from "../../components/Player";



export const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Song/>
      <Player/>
    </Theme>
  );
};