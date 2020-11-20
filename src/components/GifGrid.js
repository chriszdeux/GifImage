import React, { useEffect, useState } from 'react'

export const GifGrid = ( { category } ) => {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    const url ='http://api.giphy.com/v1/gifs/search?q=halo&limit=10&api_key=BbMih5kv2IYw34cSaeWNwapaePQ1BX1o';

    const response = await fetch(url);
    const { data } = await response.json();
    // debugger

    const gifs = data.map( img => {
      return {
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
        }
      }
    )
      
    console.log(gifs)
  }
  return (
    <div>
      <h2> {category} </h2>
      <h2> { count }</h2>
      <button onClick={ () => setCount( count + 1 )}>click</button>
    </div>
  )
}
