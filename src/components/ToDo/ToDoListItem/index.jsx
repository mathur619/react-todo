import { useState } from 'react'

const ToDoListItem = ({ text }) => {
  const [completed, setCompleted] = useState(false)
  const [deleted, setDeleted] = useState(false)

  return (
    <>
      <button type='checkbox' />
      <div>
        <p>{text}</p>
      </div>
      <button>delete</button>
    </>
  )
}

export default ToDoListItem
