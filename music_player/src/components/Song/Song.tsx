import React from 'react'
// Styled Components
import { SongPicture, SongName, SongAuthor } from './style'

export type SongProps = {
  text? : string
  primary?: boolean
}

export const Song: React.FC<SongProps> = () => {
  return (
    <>
      <SongPicture>Picture</SongPicture>
      <SongName>Name</SongName>
      <SongAuthor>Author</SongAuthor>
    </>
  )
}