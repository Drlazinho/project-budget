import React from 'react'
import * as C from './style'

export default function Container(props) {
  return (
    <C.Container>
      {props.children}
    </C.Container>
  )
}
