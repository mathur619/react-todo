import { useEffect } from 'react'
import { useState } from 'react'
import ToDoListItem from '../ToDoListItem'

const ToDoList = ({ newText }) => {
  const [list, setList] = useState([{ text: 'Learn JS' }, { text: 'Learn CSS' }])

  useEffect(() => {
    if (newText !== '') {
      setList(prev => {
        const a = [...prev, { text: newText }]
        return a
      })
    }
  }, [newText])

  return (
    <>
      {list.map(item => {
        return <ToDoListItem key={item.text} text={item.text} />
      })}
    </>
  )
}

export default ToDoList
