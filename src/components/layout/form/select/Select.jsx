import React from 'react'
import { SelectForm } from './style'

export default function Select({ text, name, options, handleOnChange, value}) {
  return (
  <SelectForm>
    <label htmlFor={name}>{text}:</label>
    <select name={name} id={name}>
      <option>Selecione uma opção</option>
    </select>  
  </SelectForm>
  )
}
