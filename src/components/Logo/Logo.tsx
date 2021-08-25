// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import styles from './Logo.module.scss'

const Logo = () => (
  <Link to="/">
    <img className={styles.logo} src={logo} alt="alt" />
  </Link>
)

export default Logo
