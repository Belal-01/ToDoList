import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Column from './Compnents/Column/Column.jsx'

function App() {
  return (
    <>
    <div className="columns-container">
      <Column  state={'PLANING'}/>
      <Column  state={'ONGOING'}/>
      <Column  state={'DONE'}/>
    </div>
      

    </>
  )
}

export default App
