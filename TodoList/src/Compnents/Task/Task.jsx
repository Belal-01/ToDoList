import React, { useState } from 'react'
import './task.css'

const Task = ({title}) => {
  

  return (
    <div className='task'>
      <div className="task-title">
        {title}
      </div>
      <div className="task-info">
       
      </div>
    </div>
  )
}

export default Task
