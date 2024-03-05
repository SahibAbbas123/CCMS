import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import CourseList from './components/CourseList'
import About from './components/About'

const courses = [
  { id: 1, name: 'Course 1', category: 'Offered' as const },
  { id: 3, name: 'Course 3', category: 'Offered' as const },
  { id: 4, name: 'Course 4', category: 'Offered' as const },
  { id: 2, name: 'Course 2', category: 'Upcoming' as const },
  { id: 5, name: 'Course 5', category: 'Upcoming' as const },
  { id: 6, name: 'Course 6', category: 'Upcoming' as const },
  // Add more courses as needed
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <CourseList courses={courses} />
    <About></About>
    </>
  )
}

export default App
