// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import logo from './logo.svg'
import Dropdown from '../Dropdown/Dropdown'

interface RootState {
  user: any,
}

const Header = () => {
  const userRoot = (state : RootState) => state.user.user
  const user = useSelector(userRoot)
  const [headerTitle, setTitle] = useState(['', '', ''])
  useEffect(() => {
    let tmpUserName
    if (user) {
      tmpUserName = [user.userInfo.surname, user.userInfo.name[0], user.userInfo.secondName[0]]
      setTitle([...tmpUserName])
    } else {
      tmpUserName = ['']
      setTitle([...tmpUserName])
    }
  }, [user])
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={logo} alt="alt" />
      <div className={styles.dropdownBox}>
        { headerTitle[0] && (<Dropdown title={`${headerTitle[0]} ${headerTitle[1]}.${headerTitle[2]}.`} />)}
      </div>
    </div>
  )
}

export default Header
