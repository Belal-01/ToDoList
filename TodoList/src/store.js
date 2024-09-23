import {create} from 'zustand'


const store = (set)=>({
  Tasks:[{
    title:"Learn React",
    description:"lorem sdfwiefsn shfewhf skdfow ",
    date:{
      day:20,
      month:9,
      year:2024
    },
    state:"PLANING",
    id:'isdhfwei'
  },{
    title:"Learn js",
    description:"lorem sdfwiefsn shfewhf skdfow ",
    date:{
      day:20,
      month:9,
      year:2024
    },
    state:"DONE",
    id:'isdhei'
  },{
    title:"Learn HTML",
    description:"lorem sdfwiefsn shfewhf skdfow ",
    date:{
      day:20,
      month:9,
      year:2024
    },
    state:"PLANING",
    id:'isdhsfei'
  },{
    title:"Learn Css",
    description:"lorem sdfwiefsn shfewhf skdfow ",
    date:{
      day:20,
      month:9,
      year:2024
    },
    state:"ONGOING",
    id:'isdhhei'
  }],
  addTask:(title,id)=>set((store)=>({Tasks:[...store.Tasks,{title:title,id,state:"PLANING"}]})),
  deleteTask:(id)=>set((store)=>({Tasks:store.Tasks.filter((task)=>task.id!==id)})),
  upadateTask:(state,id)=>set((store)=>({Tasks:store.Tasks.map((task)=>task.id===id?{...task,state}:task)}))





})



export const useStore = create(store)