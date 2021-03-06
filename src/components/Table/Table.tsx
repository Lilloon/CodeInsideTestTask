// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Table.module.scss'
import { addSelection, removeSelection } from '../../actions/selectedObjActions'

interface TableProps {
  objItem : any;
}
interface RootState {
  objList: any,
  selectedItem: any,
}

const Table: React.FC<TableProps> = ({ objItem = [{}] }) => {
  const dispatch = useDispatch()
  const selectedItemsIdRoot = (state : RootState) => state.selectedItem.selectedObj
  const selectedItemsId = useSelector(selectedItemsIdRoot)
  function handleOnClick(item : any) {
    if (!selectedItemsId.some((current: any) => current.id === item.id)) {
      dispatch(addSelection(item))
    } else {
      let tmpSelection = selectedItemsId
      tmpSelection = tmpSelection.filter((itemRemove:any) => itemRemove.id !== item.id)
      dispatch(removeSelection([...tmpSelection]))
    }
  }
  function isItemInSelection(item : any) {
    if (selectedItemsId.find((current: any) => current.id === item.id)) {
      return (true)
    }
    return (false)
  }

  return (
    <table>
      <caption> Информация студента о получении зачёта</caption>
      <thead>
        <tr>
          <th scope="col"> Название предмета </th>
          <th scope="col"> 5 </th>
          <th scope="col"> 4 </th>
          <th scope="col"> 3 </th>
          <th scope="col"> 2 </th>
          <th scope="col"> 1 </th>
          <th scope="col"> Пропущенные занятия </th>
          <th scope="col"> Зачёт </th>
        </tr>
      </thead>
      <tbody>
        { objItem.map((item:any) => (
          <tr key={item.id} onClick={() => { handleOnClick(item) }} className={`${isItemInSelection(item) ? styles.selected : undefined}`}>
            <td>{item.objName}</td>
            <td>{item.numOf5}</td>
            <td>{item.numOf4}</td>
            <td>{item.numOf3}</td>
            <td>{item.numOf2}</td>
            <td>{item.numOf1}</td>
            <td>{item.missed}</td>
            <td>{item.exam}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
