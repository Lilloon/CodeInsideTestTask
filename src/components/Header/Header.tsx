// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './Header.module.scss'
import logo from './logo.svg'

const Header = () => (
  <div className={styles.mainContainer}>
    <img className={styles.logo} src={logo} alt="alt" />
  </div>
)

export default Header
