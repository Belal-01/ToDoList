import React, { useState } from 'react'
import './task.css'
import { useStore } from '../../store'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const Task = ({title,state,id}) => {
 const deleteTask = useStore((store)=>store.deleteTask)
 const updateTask = useStore((store)=>store.upadateTask)

  return (
    <>
    <div className='task' >
      <div className="task-header">
        <div className="task-title">
          {title}
        </div>
        <span className="delete-task-btn" onClick={()=>{
          deleteTask(id)
        }}>
          <FaRegTrashAlt />
        </span>
      </div>
      <div className="task-buttons">
       {state!=='PLANING'&&
       <span className='left-arrow' onClick={()=>{
        state==="DONE"&&updateTask('ONGOING',id)
        state==="ONGOING"&&updateTask('PLANING',id)}}>
          <FaArrowAltCircleLeft />
        </span>}
      {state!=="DONE"&&
      <span className='right-arrow' onClick={()=>{
        state==="PLANING"&&updateTask("ONGOING",id)
        state==="ONGOING"&&updateTask("DONE",id)
      }}>
        <FaArrowAltCircleRight />
      </span>}
      </div>
    
      <div className="task-info">
       
      </div>
    </div>
    <div>

    </div>
    <div className="task-modle">
      <div className="overly"></div>
      <div className="modle-content">task modle</div>
    </div>
    </>
  )
}

export default Task
