import React from 'react'
// Styled Components
import {CurrentSongType} from '../../layout/App/App'
import { SongWrapper, SongPicture, SongName, SongArtist } from './style'

export type SongComponentType = {
  currentSong: CurrentSongType
}

export const Song: React.FC<SongComponentType> = ({currentSong : {name, artist, cover}}) => {
  return (
    <SongWrapper>
      <SongPicture src={cover}/> 
      <SongName>{name}</SongName>
      <SongArtist>{artist}</SongArtist>
    </SongWrapper>
  )
}