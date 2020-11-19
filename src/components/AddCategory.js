import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setinputValue] = useState('')

  const handleOnChange = (event) => {
    setinputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length > 2) {
      setCategories( cats => [...cats, inputValue])
      setinputValue('');
    } 
  }

  return (

    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={inputValue} 
        onChange={ handleOnChange }
      />
    </form>
  )
  
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
