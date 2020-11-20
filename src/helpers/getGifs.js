export const getGifs = async ( category ) => {
  const url =`http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=BbMih5kv2IYw34cSaeWNwapaePQ1BX1o`;

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
  return gifs
}