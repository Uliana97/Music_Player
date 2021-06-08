import React from 'react'
// Styled Components
import {TCurrentSongType} from '../../layout/App/App'
import { LibraryWrapper, LibrarySongWrapper, ArtistInfo, LibrarySongPicture, LibrarySongName, LibrarySongArtist } from './style'

export interface TAudioLibraryType {
  songs: TCurrentSongType[];
}

export const AudioLibrary: React.FC<TAudioLibraryType> = ({songs}) => {
  return (
    <LibraryWrapper>
      {songs.map(({name, cover, artist}) => {
        return (
          <LibrarySongWrapper>
            <LibrarySongPicture alt={`${name}-picture`} src={cover}/> 
            <ArtistInfo>
              <LibrarySongName>{name}</LibrarySongName>
              <LibrarySongArtist>{artist}</LibrarySongArtist>
            </ArtistInfo>
          </LibrarySongWrapper>
        )
      })}
    </LibraryWrapper>
  )
}