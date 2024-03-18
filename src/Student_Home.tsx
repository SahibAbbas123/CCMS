import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

// import backgroundImage from "/mymind-XUlsF9LYeVk-unsplash.jpg"; // Import your background image

import "./App.css";
// import Navbar from "./components/Navbar";
// import CourseDetails from "./components/CourseDetails";
// import CourseList, { Course } from "./components/CourseList";
// import CourseList_Teacher from "./components/CourseList_Teacher";
import Intro from "./components/Intro";
import Navbar_Student from "./components/Navbar_Student";
import CourseList_Student, { Course } from "./components/CourseList_Student";
import About from "./components/About";


export const courses: Course[] = [
  { id: 1, name: "Python", level: "Intermediate", category: "Offered",description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 2, name: "JavaScript", level: "Beginner", category: "Offered", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 3, name: "React", level: "Advanced", category: "Upcoming", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 4, name: "Node.js", level: "Intermediate", category: "Upcoming", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 5, name: "Laravel", level: "Intermediate", category: "Offered", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 6, name: "HTML", level: "Beginner", category: "Offered", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 7, name: "Express.js", level: "Advanced", category: "Upcoming", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 8, name: "Bootstrap", level: "Intermediate", category: "Upcoming", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 5, name: "Laravel", level: "Intermediate", category: "Enrolled", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 6, name: "HTML", level: "Beginner", category: "Enrolled", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 7, name: "Express.js", level: "Advanced", category: "Enrolled", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
  { id: 8, name: "Bootstrap", level: "Intermediate", category: "Enrolled", description:'lorem ipsum', duration:'2 months', prerequisites: 'none', instructor: 'Nowshed Sir', certification:'Yes' },
];
const course = {
  id: 1,
  name: "Python",
  level: "Intermediate",
  description: "Learn Python programming language.",
  duration: "6 weeks",
  prerequisites: "Basic programming knowledge",
  instructor: "John Doe",
  format: "Online",
  certification: "Yes",
};

// const router = createBrowserRouter([
//     // {
//     //   path: "/",
//     //   element: <Root />,
//     // },
//     {
//       path: "courses/:id",
//       element: <CourseDetails course={course} />,
//     },
//   ]);

const LandingPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        backgroundImage: `url('../public/mymind-XUlsF9LYeVk-unsplash.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
        fontFamily: "Poppins, sans-serif", // Apply font family if needed
      }}
    >
      <Navbar_Student></Navbar_Student>
      <Intro></Intro>
      <CourseList_Student courses={courses}></CourseList_Student>
      <About></About>
    </div>
  );
};

export default LandingPage;