import React from 'react'
// Styled Components
import {TCurrentSongType} from '../../layout/App'
import { SongWrapper, SongPicture, SongName, SongArtist } from './style'

export interface TSongComponentType {
  currentSong: TCurrentSongType;
  setIsOpenLibrary: React.Dispatch<boolean>;
}

export const Song: React.FC<TSongComponentType> = ({currentSong : {name, artist, cover}, setIsOpenLibrary}) => (
    <SongWrapper onClick={() => setIsOpenLibrary(false)}>
      <SongPicture alt={`${name}-picture`} src={cover}/> 
      <SongName>{name}</SongName>
      <SongArtist>{artist}</SongArtist>
    </SongWrapper>
)