// eslint-disable-next-line no-use-before-define
import React from 'react'
import './Table.module.scss'

interface TableProps {
  objItem : any;
}

const Table: React.FC<TableProps> = ({ objItem = [{}] }) => {
  const checkExam = (item:any) => {
    if ((item.numOf5 * 5 + item.numOf4 * 4 + item.numOf3 * 3 + item.numOf2 * 2) / (item.numOf5 + item.numOf4 + item.numOf3 + item.numOf2) > 4.2 && item.missed < 8) return ('Получен')
    return ('Не получен')
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
          <th scope="col"> Пропущенные занятия </th>
          <th scope="col"> Зачёт </th>
        </tr>
      </thead>
      <tbody>
        { objItem.map((item:any) => (
          <tr>
            <td>{item.objName}</td>
            <td>{item.numOf5}</td>
            <td>{item.numOf4}</td>
            <td>{item.numOf3}</td>
            <td>{item.numOf2}</td>
            <td>{item.missed}</td>
            <td>{checkExam(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
