import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import * as C from './style'

export default function Footer() {
  return (
    <C.Footer>
      <ul>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
      <p>
        <span>Project Budget</span> &copy; 2021
      </p>
    </C.Footer>
  )
}
