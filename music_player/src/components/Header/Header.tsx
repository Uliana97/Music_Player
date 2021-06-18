import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
// Styled Components
import { HeaderWrapper, Logo, LibrarySwitcher } from './style'

export interface THeader {
  handleLibrarySwitch: () => void;
}

export const Header: React.FC<THeader> = ({handleLibrarySwitch}) => (
    <HeaderWrapper>
      <Logo>Waves</Logo> 
      <LibrarySwitcher onClick={handleLibrarySwitch}>
        <FontAwesomeIcon size="1x" icon={faMusic} /><span>Library</span>
      </LibrarySwitcher>
    </HeaderWrapper>
)