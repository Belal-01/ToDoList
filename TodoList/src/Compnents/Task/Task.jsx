import React, { useState } from 'react'
import './task.css'
import { useStore } from '../../store'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Task = ({id}) => {
const [modle,setModle] = useState(false);
const task = useStore((store)=>store.Tasks.find((task)=>task.id===id))
 const deleteTask = useStore((store)=>store.deleteTask)
 const updateTask = useStore((store)=>store.upadateTask)

 console.log(task.date)

  return (
    <>
    <div className='task' >
      <div className="task-header">
        <div className="task-title">
          {task.title}
        </div>
        <span className="delete-task-btn" onClick={()=>{
          deleteTask(id)
        }}>
          <FaRegTrashAlt />
        </span>
      </div>
      <div className="task-buttons">
       {task.state!=='PLANING'&&
       <span className='left-arrow' onClick={()=>{
        task.state==="DONE"&&updateTask('ONGOING',id)
        task.state==="ONGOING"&&updateTask('PLANING',id)}}>
          <FaArrowAltCircleLeft />
        </span>}
      {task.state!=="DONE"&&
      <span className='right-arrow' onClick={()=>{
        task.state==="PLANING"&&updateTask("ONGOING",id)
        task.state==="ONGOING"&&updateTask("DONE",id)
      }}>
        <FaArrowAltCircleRight />
      </span>}
      </div>
      <div className="task-show-modle">
        <span className='showMore-btn' onClick={()=>setModle(true)}>
          ShowMore
        </span>       
      </div>
  
    </div>
    <div>

    </div>
 {modle&&<div className="task-modle">
    <div className="overly" onClick={()=>setModle(false)}></div>
    <div className="modle-content">
      <div className="modle-header">
        <div className="modle-title">
          {task.title}
        </div>
        <div className="modle-close-btn" >
          <span onClick={()=>setModle(false)}>
            <IoMdCloseCircleOutline />
          </span>
        </div>
      </div>
      <div className="modle-description" >
          {task.description}
      </div>
      <hr />
      <div className="modle-date">
        <span>
          {task.date.day +' / '+ task.date.month +' / ' +task.date.year}
        </span>
      </div>
    </div>
  </div>}
    </>

  )
}

export default Task
