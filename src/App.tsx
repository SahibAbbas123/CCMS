//App.tsx
import { useState } from "react";
import backgroundImage from "./images/mymind-XUlsF9LYeVk-unsplash.jpg"; // Import your background image
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import CourseList from "./components/CourseList";
import About from "./components/About";

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
      <Navbar />
      <Intro />
      <CourseList courses={courses} />
      {/* Type '{ id: number; name: string; level: string; category: string; }[]' is not assignable to type 'Course[]'.
  Type '{ id: number; name: string; level: string; category: string; }' is not assignable to type 'Course'.
    Types of property 'category' are incompatible.
      Type 'string' is not assignable to type '"Offered" | "Upcoming"'.ts(2322)
CourseList.tsx(12, 3): The expected type comes from property 'courses' which is declared here on type 'IntrinsicAttributes & Props'
(property) Props.courses: Course[] */}
      <About />
    </div>
  );
}

export default App;
