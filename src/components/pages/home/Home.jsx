import React from 'react'
import * as C from './style'
import withidea from '../../../assets/withidea.svg'
import LinkButton from '../../layout/linkButton/LinkButton'

export default function Home() {
  return (
    <C.Section>
      <div>
        <h1>Bem-vindo ao <span>Project-Budget</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>
      <img src={withidea} alt="project"/>
    </C.Section>
  )
}
