import React from 'react'
// Styled Components
import {TCurrentSongType} from '../../layout/App/App'
import { LibraryWrapper, LibrarySongWrapper, ArtistInfo, LibrarySongPicture, LibrarySongName, LibrarySongArtist } from './style'

export interface TAudioLibraryType {
  songs: TCurrentSongType[];
  setCurrentSong: React.Dispatch<TCurrentSongType>;
}

export const AudioLibrary: React.FC<TAudioLibraryType> = ({songs, setCurrentSong}) => {
  const handleChoosefromLibrary = (id: string) => {
    const newSong = songs.find((song) => song.id === id);
    newSong && setCurrentSong(newSong);
  }
  
  return (
    <LibraryWrapper> 
      {songs.map(({name, cover, artist, id, active}) => {
        return (
          <LibrarySongWrapper key={id} isActive={active} onClick={() => handleChoosefromLibrary(id)}>
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