import React, { useState } from 'react';

export const GifExpertApp = () => {
  // const categories = ['Death Note', 'Naruto', 'Fate/zero']
  const [categories, setCategories] = useState(['Death Note', 'Naruto', 'Fate/zero']);

  const handleAdd = () => {
    // setCategories( [...categories, 'Attack on Titans'] );
    // setCategories( ['Dragon Ball', ...categories] )
    setCategories( cats => (
      [...cats, 'Sword Art Online']
    ))
  }
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <button onClick={ handleAdd }>Add</button>
      <ol>
      {
        categories.map( category => {
        return <li key={ category }>{ category }</li>
        
        })
      }
      </ol>

    </>
  )
}

export default GifExpertApp;
