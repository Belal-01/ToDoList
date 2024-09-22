import {create} from 'zustand'


const store = (set)=>({
  Tasks:[{
    title:"Learn React",
    state:"PLANING",
    id:'isdhfwei'
  },{
    title:"Learn js",
    state:"DONE",
    id:'isdhei'
  },{
    title:"Learn js",
    state:"PLANING",
    id:'isdhsfei'
  },{
    title:"Learn js",
    state:"ONGOING",
    id:'isdhhei'
  }],
  addTask:(title,id)=>set((store)=>({Tasks:[...store.Tasks,{title:title,id,state:"PLANING"}]})),
  deleteTask:(id)=>set((store)=>({Tasks:store.Tasks.filter((task)=>task.id!==id)})),
  upadateTask:(state,id)=>set((store)=>({Tasks:store.Tasks.map((task)=>task.id===id?{...task,state}:task)}))





})



export const useStore = create(store)