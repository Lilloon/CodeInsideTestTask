import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ClickOutside from '@codecraftkit/clickoutside'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../actions/userActions'
import styles from './Dropdown.module.scss'
import arrowClosed from './arrowClosed.svg'
import arrowOpened from './arrowOpened.svg'

const Dropdown = ({
  title,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const dispatch = useDispatch()
  let history = useHistory()
  const items = [
    {
      id: 1,
      value: 'О студенте',
      func: () => {
        history.push('/about')
      },
    },
    {
      id: 2,
      value: 'Выйти',
      func: () => {
        dispatch(removeUser())
        removeCookie('user')
        history.push('/login')
      },
    },
  ]

  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const close = () => setOpen(false)
  function handleOnClick(item) {
    setSelection([item])
    item.func()
    close()
  }

  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return (true)
    }
    return (false)
  }

  function chooseArrow() {
    if (!open) { return (arrowClosed) } return (arrowOpened)
  }
  return (
    <div
      className={styles.dd_wrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <ClickOutside handleAction={close}>
        <div
          tabIndex={0}
          className={` ${styles.dd_header} `}
          role="button"
        >
          <div className={styles.dd_header_title}>
            <p>{title}</p>
          </div>
          <div className={styles.dd_header__action}>
            <img src={chooseArrow()} alt="" className={styles.img} />
          </div>
        </div>
        {open && (
        <ul className={styles.dd_list}>
          {
                    items.map((item) => (
                      <li className={`${styles.dd_list_item} ${isItemInSelection(item) ? styles.Selected : undefined}`} key={item.id}>
                        <button type="button" className={isItemInSelection(item) ? styles.Selected : undefined} onClick={() => handleOnClick(item)}>
                          <span>{item.value}</span>
                          <span>
                            {}
                          </span>
                        </button>
                      </li>
                    ))
                }
        </ul>
        )}
      </ClickOutside>
    </div>
  )
}

export default Dropdown
