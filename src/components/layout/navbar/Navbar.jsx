import React from 'react'
import { Link } from '@reach/router'

import * as C from './style'
import Container from '../container/Container'
import idea from '../../../assets/idea.png'

export default function Navbar() {
  return (
    <C.Navbar>

      <Container>
        <Link to="/">
          <img src={idea} alt="Costs"/>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
        <Link to="/company">Empresa</Link>

          </li>
          <li>
        <Link to="/newproject">Novo Projeto</Link>

          </li>
        </ul>
      </Container>
    </C.Navbar>
  )
}
