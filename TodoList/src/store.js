import {create} from 'zustand'


const store = (set)=>({
  Tasks:[{
    title:"Learn React",
    state:"PLANING",
    id:'isdhfwei'
  },{
    title:"Learn js",
    state:"PLANING",
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


})



export const useStore = create(store)