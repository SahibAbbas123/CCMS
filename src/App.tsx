import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    </>
  )
}

export default App
