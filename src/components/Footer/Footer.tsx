// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h2>Приложение разработано специально для CodeInside</h2>
      </div>
      <div className={styles.contacts}>
        <h2>e-mail: nikita.grischin2015@yandex.ru</h2>
        <h2>phone: +7(927)-395-68-47</h2>
      </div>

    </div>
  </div>
)

export default Footer
