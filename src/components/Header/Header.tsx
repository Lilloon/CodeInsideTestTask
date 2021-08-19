// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './Header.module.scss'
import logo from './logo.svg'
import Dropdown from '../Dropdown/Dropdown'

const Header = () => (
  <div className={styles.mainContainer}>
    <img className={styles.logo} src={logo} alt="alt" />
    <div className={styles.dropdownBox}>
      <Dropdown title="Гришин Н.Д." />
    </div>
  </div>
)

export default Header
