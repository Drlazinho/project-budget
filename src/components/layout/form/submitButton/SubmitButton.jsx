import React from 'react'
import * as C from './style'

export default function SubmitButton({ text }) {
  return (
    <div>
      <C.Button>{text}</C.Button>
    </div>
  )
}
