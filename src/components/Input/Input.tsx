// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  text: string,
  onChange: any,
  value: any,
  inputsNumber: number,
  type: string,
  errorMessage:string,
  password: boolean,
}

const Input: React.FC<InputProps> = ({
  text,
  onChange,
  value,
  inputsNumber,
  type,
  errorMessage,
  password = false,
}) => {
  const checkType = () => {
    switch (type) {
      case 'Any':
        return (
          (value === '' || (value.length >= 3 && value.length <= 16)) ? undefined : styles.Error
        )
      case 'number':
        // eslint-disable-next-line no-restricted-globals
        return isNaN(Number(value)) ? styles.Error : undefined
      default:
        return undefined
    }
  }
  const handleChange = (e:any) => {
    if (onChange) onChange(e.target.value, inputsNumber);
  }
  return (
    <div
      className={styles.Input}
      tabIndex={0}
      role="button"
    >
      <p className={styles.text}>{text}</p>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <input
        onChange={handleChange}
        className={`${styles.InputWindow} ${styles.Active} ${checkType()}`}
        type={password ? 'password' : 'text'}
        value={value}
      />
    </div>
  )
}

export default Input
