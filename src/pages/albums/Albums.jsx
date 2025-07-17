import React from 'react'
import Hero from '../../components/hero/Hero'
import AlbumCom from '../../components/album/AlbumCom'

const Albums = () => {
  return (
    <div id='album'>
      <Hero text={"Albums"}/>
      <AlbumCom/>
    </div>
  )
}

export default Albums