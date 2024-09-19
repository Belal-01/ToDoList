import React from 'react'
import './column.css'
import Task from '../Task/Task'
import { useStore } from '../../store.js'

const Column = ({state}) => {



  return (
    <div className="column">
      <div className="column-state">
        <button>
        {state}
        </button>        
      </div>
      <div className="column-tasks">
          <Task title={"learn js"} />
      </div>
    </div>

  )
}

export default Column
