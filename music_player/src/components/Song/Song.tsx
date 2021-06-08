import React from 'react'
// Styled Components
import {TCurrentSongType} from '../../layout/App/App'
import { SongWrapper, SongPicture, SongName, SongArtist } from './style'

export interface TSongComponentType {
  currentSong: TCurrentSongType;
}

export const Song: React.FC<TSongComponentType> = ({currentSong : {name, artist, cover}}) => {
  return (
    <SongWrapper>
      <SongPicture alt={`${name}-picture`} src={cover}/> 
      <SongName>{name}</SongName>
      <SongArtist>{artist}</SongArtist>
    </SongWrapper>
  )
}