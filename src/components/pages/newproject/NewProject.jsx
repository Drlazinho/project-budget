import React from 'react'
import ProjectForm from '../../project/ProjectForm'
import * as C from './style'

export default function NewProjects() {
  return (
    <C.Container>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText = "Criar Projeto"/>
    </C.Container>
  )
}
