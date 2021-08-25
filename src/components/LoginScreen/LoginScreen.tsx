// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import styles from './LoginScreen.module.scss'
import TextButton from '../Button/TextButton'
import Input from '../Input/Input'
import { Users } from '../../users'
import { addUser } from '../../actions/userActions'

const LoginScreen = () => {
  const [cookies, setCookie] = useCookies(['user']);
  let histoty = useHistory()
  const dispatch = useDispatch()
  const [inputsValue, setInputsValue] = useState(['', ''])
  const [errorMessage, setErrorMesage] = useState('')
  useEffect(() => {
    if (cookies.user) {
      histoty.push('/')
      Users.forEach((item) => {
        if (item.login === cookies.user.login) dispatch(addUser(item))
      })
    }
  }, [])

  const onChangeInput = (value:string, i:number) => {
    let tmpValue = [...inputsValue]
    tmpValue[i] = value
    setInputsValue([...tmpValue])
  }

  const checkUser = () => {
    let tmpErrorMessages
    Users.forEach((item) => {
      if (item.login === inputsValue[0]) {
        if (item.password === inputsValue[1]) {
          dispatch(addUser(item))
          setCookie('user', { login: inputsValue[0], isAuth: true })
          histoty.push('/')
        } else {
          tmpErrorMessages = errorMessage
          tmpErrorMessages = 'Неверный пароль'
          setErrorMesage(tmpErrorMessages)
        }
      } else {
        tmpErrorMessages = errorMessage
        tmpErrorMessages = 'Данного пользователя не существует'
        setErrorMesage(tmpErrorMessages)
      }
    })
  }

  return (
    <div className={styles.loginScreenMain}>
      <div className={styles.loginContainer}>
        <div className={styles.inputs}>
          <Input text="Логин" onChange={onChangeInput} value={inputsValue[0]} type="Any" inputsNumber={0} errorMessage="" />
          <Input text="Пароль" onChange={onChangeInput} value={inputsValue[1]} type="Any" inputsNumber={1} errorMessage="" />
        </div>
        <span className={styles.errorMessage}>
          { errorMessage }
        </span>
        <div className={styles.button}>
          <TextButton styleButton={2} text="Войти" func={checkUser} />
        </div>
      </div>

    </div>

  )
}

export default LoginScreen
