import React from 'react'

const Todo = (props) => {
  return (
    (
          //props is object which contains all the input values --> props.title , props.desc
          <div className="container">
              <div className='title'>{props.title}</div>
              <div className='desc'>{props.desc}</div>
          </div>
        
    )
  )
}

export default Todo
