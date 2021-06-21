import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
// Styled Components
import { HeaderWrapper, Logo, LibrarySwitcher, ThemeSwitcher } from './style'

export interface THeader {
  handleLibrarySwitch: () => void;
  handleThemeSwitch: () => void;
  Theme: string;
}

export const Header: React.FC<THeader> = ({handleLibrarySwitch, handleThemeSwitch, Theme}) => (
    <HeaderWrapper>
      <Logo>Waves</Logo> 
      <ThemeSwitcher onClick={handleThemeSwitch}>
        <FontAwesomeIcon size="1x" icon={Theme === 'dark' ? faSun : faMoon} />
      </ThemeSwitcher>
      <LibrarySwitcher onClick={handleLibrarySwitch}>
        <FontAwesomeIcon size="1x" icon={faMusic} /><span>Library</span>
      </LibrarySwitcher>
    </HeaderWrapper>
)