// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from './TextButton.module.scss'

interface TextButtonProps {
  text:any,
  styleButton:number,
  func: any,
}

function handlerClick(func: any) {
  if (func) func();
}

const TextButton: React.FC<TextButtonProps> = ({
  text, styleButton = 1, func,
}) => (
  <button
    className={`${styles.TextButton}
    ${styleButton === 1 && styles.Default}
    ${styleButton === 2 && styles.OnlyBorders}
    ${styleButton === 3 && styles.OnlyText}`}
    type="button"
    onClick={() => handlerClick(func)}
  >
    {text}
  </button>
)

export default TextButton