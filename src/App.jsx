import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './Appbar'
import Simplecalculator from './Simplecalculator'

function App() {
  return <div>
    <Appbar/>
    <Simplecalculator/> 
  </div>
}

export default App
