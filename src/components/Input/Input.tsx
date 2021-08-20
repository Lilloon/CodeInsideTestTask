// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  placeHolder: string,
  onChange: any,
  value: any,
}

const Input: React.FC<InputProps> = ({
  placeHolder, onChange, value,
}) => {
  const handleChange = (e:any) => {
    if (onChange) onChange(e.target.value);
  }
  return (
    <div
      className={styles.Input}
      tabIndex={0}
      role="button"
    >
      <input
        onChange={handleChange}
        className={`${styles.InputWindow} ${styles.Active}`}
        type="text"
        placeholder={placeHolder}
        value={value}
      />
    </div>
  )
}

export default Input
