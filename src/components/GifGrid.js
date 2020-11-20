import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( { category } ) => {
  

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h2> {category} </h2>
      { loading && <p>Loading...</p>}
      <div className="grid-card animate__animated animate__fadeIn animated__slower">
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
