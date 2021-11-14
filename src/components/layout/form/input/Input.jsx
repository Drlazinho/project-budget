import React from 'react'
import { Control } from './style'

export default function Input({type, text, name, placeholder, handleOnChange, value}) {
  return (
    <Control>
      <label htmlFor={name}>{text}:</label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}
      />
    </Control>
  )
}
