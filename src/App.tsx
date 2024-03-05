import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import CourseList from './components/CourseList'

const courses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
  // Add more courses as needed
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <CourseList courses={courses}></CourseList>
    </>
  )
}

export default App
