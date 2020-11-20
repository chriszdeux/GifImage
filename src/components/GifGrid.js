import React, { useEffect, useState } from 'react'

import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
export const GifGrid = ( { category } ) => {
  
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs( category )
      .then( setImages )
  }, [ category ])

  
  return (
    <>
      <h2> {category} </h2>
      <div className="grid-card">
          {
            images.map(image => (
              <GifGridItem 
              key={image.id}
              {...image}
              />
              ))
            }
      </div>
    </>
  )
}
