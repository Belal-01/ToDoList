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
    id:'isdhei'
  },{
    title:"Learn js",
    state:"ONGOING",
    id:'isdhei'
  }],
  addTask:(title,id)=>set((store)=>({Tasks:[...store.Tasks,{title:title,id,state:"PLANING"}]})),




})



export const useStore = create(store)