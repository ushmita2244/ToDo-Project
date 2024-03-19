import React from 'react'

const TodoButton = (props) => {
  return (
    <div>
      <button onClick={()=>props.todoDeleteHandler(props.id)}>Delete❌</button>{/*//callback lagate h jab hume kisi chiz hone ke baad hme krvana h kuch */}
    </div>
  )
}

export default TodoButton
