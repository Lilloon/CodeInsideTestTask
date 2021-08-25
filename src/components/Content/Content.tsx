// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Content.module.scss'
import Input from '../Input/Input'
import TextButton from '../Button/TextButton'
import Table from '../Table/Table'
import { addObj, removeObj } from '../../actions/objActions'
import { clearSelection } from '../../actions/selectedObjActions'
import { Auth } from '../../auth'

interface RootState {
  objList: any,
  selectedItem: any,
}

const Content: React.FC = () => {
  const [cookies] = useCookies(['user']);
  let history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    Auth.isAuth(cookies, dispatch, history)
  }, [])
  const selectedItemsRoot = (state : RootState) => state.selectedItem.selectedObj
  const selectedItems = useSelector(selectedItemsRoot)
  const listRoot = (state: RootState) => state.objList.ObjList
  const objList = useSelector(listRoot)
  const [isInputsVidible, setInputVisible] = useState(false)
  const [inputsValue, setInputsValue] = useState(['', '', '', '', '', ''])
  const [errorMessages, setErrorMessage] = useState(['', '', '', '', '', ''])
  const [curerntId, setId] = useState(objList.length)

  const onChangeInput = (value:string, i:number) => {
    let tmpValue = [...inputsValue]
    tmpValue[i] = value
    setInputsValue([...tmpValue])
  }

  const onClickRemove = () => {
    if (selectedItems !== null) {
      let tmpArr = [1]
      tmpArr = []
      selectedItems.forEach((item: any) => tmpArr.push(item.id))
      dispatch(removeObj(tmpArr))
      dispatch(clearSelection(null))
    }
  }

  const onClickShowInputs = () => {
    setInputVisible(true)
  }

  const onClickAdd = (indexesOfAny: any, indexesOfNumber: any) => {
    let inputsIsOk = true
    let tmpErrorMessages = errorMessages
    indexesOfAny.forEach((item: number) => {
      if (inputsValue[item].length < 3 || inputsValue[item].length > 16) {
        tmpErrorMessages = errorMessages
        tmpErrorMessages[item] = 'Поле должно быть от 3 до 15 символов'
        setErrorMessage([...tmpErrorMessages])
        inputsIsOk = false
      } else {
        tmpErrorMessages[item] = ''
        setErrorMessage([...tmpErrorMessages])
      }
    })
    indexesOfNumber.forEach((item: number) => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(Number(inputsValue[item])) || inputsValue[item].length === 0) {
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(Number(inputsValue[item]))) {
          tmpErrorMessages = errorMessages
          tmpErrorMessages[item] = 'Поле может содержать только числа'
          setErrorMessage([...tmpErrorMessages])
        }
        if (inputsValue[item].length === 0) {
          tmpErrorMessages = errorMessages
          tmpErrorMessages[item] = 'Поле не может быть пустым'
          setErrorMessage([...tmpErrorMessages])
        }
        inputsIsOk = false
      } else {
        tmpErrorMessages[item] = ''
        setErrorMessage([...tmpErrorMessages])
      }
    })
    if (inputsIsOk) {
      let tmpInputsValue = inputsValue
      setId(curerntId + 1)
      dispatch(addObj({
        id: curerntId + 1,
        objName: inputsValue[0],
        numOf5: Number(inputsValue[1]),
        numOf4: Number(inputsValue[2]),
        numOf3: Number(inputsValue[3]),
        numOf2: Number(inputsValue[4]),
        missed: Number(inputsValue[5]),
      }))
      tmpInputsValue = ['', '', '', '', '', '']
      setInputsValue([...tmpInputsValue])
    }
  }

  return (
    <div className={styles.mainContent}>

      <div className={styles.componentsContainer}>
        <div className={styles.buttons}>
          <TextButton text="Удалить предмет" styleButton={2} func={() => { onClickRemove() }} />
          <TextButton text="Добавить предмет" styleButton={1} func={onClickShowInputs} />
        </div>

        {isInputsVidible && (
        <div className={styles.addObjectBox}>
          <div className={styles.inputs}>
            <Input password={false} errorMessage={errorMessages[0]} inputsNumber={0} type="Any" value={inputsValue[0]} text="Название предмета" onChange={onChangeInput} />
            <Input password={false} errorMessage={errorMessages[1]} inputsNumber={1} type="number" value={inputsValue[1]} text="Количество оценок '5'" onChange={onChangeInput} />
            <Input password={false} errorMessage={errorMessages[2]} inputsNumber={2} type="number" value={inputsValue[2]} text="Количество оценок '4'" onChange={onChangeInput} />
            <Input password={false} errorMessage={errorMessages[3]} inputsNumber={3} type="number" value={inputsValue[3]} text="Количество оценок '3'" onChange={onChangeInput} />
            <Input password={false} errorMessage={errorMessages[4]} inputsNumber={4} type="number" value={inputsValue[4]} text="Количество оценок '2'" onChange={onChangeInput} />
            <Input password={false} errorMessage={errorMessages[5]} inputsNumber={5} type="number" value={inputsValue[5]} text="Количество пропущенных занятий" onChange={onChangeInput} />
          </div>
          <div className={styles.addButton}>
            <TextButton text="Добавить" func={() => { onClickAdd([0], [1, 2, 3, 4, 5]) }} styleButton={1} />
          </div>
        </div>
        )}
      </div>

      <div className={styles.tableContainer}>
        <Table objItem={objList} />
      </div>
    </div>
  )
}

export default Content
