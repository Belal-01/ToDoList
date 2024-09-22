import React, { useMemo } from 'react'
import './column.css'
import Task from '../Task/Task'
import { useStore } from '../../store.js'
import { useState } from 'react'
import classNames from 'classnames'


const Column = ({state}) => {
  const [title,setTitle] = useState('')
  const [hideForm,setHideForm] = useState(true);
  const tasks = useStore((store)=>store.Tasks)
  const addTask = useStore((store)=>store.addTask)
  const deleteTask = useStore((store)=>store.deleteTask)

const filteredTasks = useMemo(()=>{
   const newTasks =  tasks.filter((task)=>task.state===state);
   return newTasks
  },[tasks])


 

  const TasksElements = filteredTasks.map((task)=>(<Task title = {task.title} state={state} id={task.id} key={task.id}/>))


  return (
    <div className="column">
      <div className="column-state">
        <button className='column-state-btn'>
        {state}
        </button>        
      </div>
      <div className="column-tasks">
          {TasksElements}
      </div>
      
     
      
    {state==="PLANING"&&<>
        <div className="show-form-btn">
          <button onClick={()=>setHideForm(prev=>!prev)}>
         +add new Task
        </button>
        </div>
        <form className={classNames('column-add-task-form',{hideForm:hideForm})} onSubmit={(e)=>{
        e.preventDefault()
        const id = Date()
        setTitle('')
        addTask(title,id)
        setHideForm(true)
      }}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button>Submit</button>

      </form></>}
    </div>

  )
}

export default Column
