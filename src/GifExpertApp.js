import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Fate/zero']);

  const handleAdd = () => {
    // setCategories( [...categories, 'Attack on Titans'] );
    // setCategories( ['Dragon Ball', ...categories] )
    // setCategories( cats => (
    //   [...cats, 'Sword Art Online']
    // ))
  }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={  setCategories }/>
      <hr/>
      <ol>
      {
        categories.map ( category => 
          <GifGrid 
            key={category}
            category={category}
          />
        )
      }
      </ol>

    </>
  )
}


export default GifExpertApp;
