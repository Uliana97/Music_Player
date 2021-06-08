import React from 'react'
// Styled Components
import {TCurrentSongType} from '../../layout/App/App'
import { LibraryWrapper, LibrarySongWrapper, ArtistInfo, LibrarySongPicture, LibrarySongName, LibrarySongArtist } from './style'

export interface TAudioLibraryType {
  songs: TCurrentSongType[];
  audioRef: React.RefObject<HTMLAudioElement>;
  currentSong: TCurrentSongType;
  setCurrentSong: React.Dispatch<TCurrentSongType>;
  isPlaying: boolean;
}

export const AudioLibrary: React.FC<TAudioLibraryType> = ({songs, audioRef, setCurrentSong, isPlaying}) => {
  const handleChoosefromLibrary = (id: string) => {
    const newSong = songs.find((song) => song.id === id);
    newSong && setCurrentSong(newSong);

    isPlaying && audioRef.current?.play()
    .then(() => audioRef.current?.play())
    .catch((e) => console.log(e))
  }
  
  return (
    <LibraryWrapper> 
      {songs.map(({name, cover, artist, id}) => {
        return (
          <LibrarySongWrapper key={id} onClick={() => handleChoosefromLibrary(id)}>
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