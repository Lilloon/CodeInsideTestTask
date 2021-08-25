// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './About.module.scss'

interface RootState {
  user: any,
}

const About = () => {
  const userRoot = (state : RootState) => state.user.user
  const user = useSelector(userRoot)
  return (
    <div className={styles.mainContainer}>
      <div className={styles.aboutBlock}>
        {user && (
          <div className={styles.usersInfo}>
            <span>{`ФИО : ${user.userInfo.surname} ${user.userInfo.name} ${user.userInfo.secondName}`}</span>
            <span>{`Дата Рождения : ${user.userInfo.birthDate}`}</span>
            <span>{`Факультет : ${user.userInfo.faculty}`}</span>
            <span>{`Учебная группа : ${user.userInfo.group}`}</span>
            <span>{`Эл. почта : ${user.userInfo.email}`}</span>
            <span>{`Номер телефона : ${user.userInfo.phone}`}</span>
          </div>
        )}

      </div>
    </div>
  )
}

export default About
