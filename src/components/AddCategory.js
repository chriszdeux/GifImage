import React, { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setinputValue] = useState('Hello world')

  const handleOnChange = (event) => {
    setinputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit done')
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
