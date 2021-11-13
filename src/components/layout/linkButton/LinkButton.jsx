import React from 'react'
import {Link} from '@reach/router'
import styles from './LinkButton.module.css'

export default function LinkButton({to, text}) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}
