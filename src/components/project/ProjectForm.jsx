import React from 'react'
import Input from '../layout/form/input/Input'
import Select from '../layout/form/select/Select'
import SubmitButton from '../layout/form/submitButton/SubmitButton'
import * as C from './style'

export default function ProjectForm({btnText}) {
  return (
    <C.Form>
      <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
      <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total do projeto"/>
      <Select name="category_id" text="Selecione a categoria"/>
      <SubmitButton text={btnText}/> 
    </C.Form>
  )
}
