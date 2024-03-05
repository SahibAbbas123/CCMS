//App.tsx
import { useState } from "react";
import backgroundImage from "./images/mymind-XUlsF9LYeVk-unsplash.jpg"; // Import your background image
import "./App.css";
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import CourseList from "./components/CourseList";
// import About from "./components/About";
import CourseDetails from "./components/CourseDetails";

const courses = [
  { id: 1, name: "Python", level: "Intermediate", category: "Offered" },
  { id: 2, name: "JavaScript", level: "Beginner", category: "Offered" },
  { id: 3, name: "React", level: "Advanced", category: "Upcoming" },
  { id: 4, name: "Node.js", level: "Intermediate", category: "Upcoming" },
  { id: 5, name: "Laravel", level: "Intermediate", category: "Offered" },
  { id: 6, name: "HTML", level: "Beginner", category: "Offered" },
  { id: 7, name: "Express.js", level: "Advanced", category: "Upcoming" },
  { id: 8, name: "Bootstrap", level: "Intermediate", category: "Upcoming" },
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
  certification: "Yes"
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
        fontFamily: "Poppins, sans-serif", // Apply font family if needed
      }}
    >
      <CourseDetails course={course}></CourseDetails> 
      {/* pass an example parameter */}
    </div>
  );
}

export default App;
