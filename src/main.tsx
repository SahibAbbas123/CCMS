import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage.tsx";
import CourseDetails from "./components/CourseDetails.tsx";
import LoginPage from "./components/LoginPage.tsx";
import Teacher_Home from "./Teacher_Home.tsx";
import Student_Home from "./Student_Home.tsx";
import SignUpPage_temp from "./components/SignupPage_temp";
import Student_Dashboard from "./Student_Dashboard.tsx";
import Teacher_Dashboard from "./Teacher_Dashboard.tsx";
// import SignUpPage from "./components/SignupPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // children: [
    //   {
    //     path: "course/:id",
    //     element: <CourseDetails course={course} />,
    //   },
    // ],
  },
  {
    path: "course/:id",
    element: <CourseDetails />,
  },
  {
    path: "/signup",
    element: <SignUpPage_temp />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/teacher",
    element: <Teacher_Home />,
  },
  {
    path: "/student",
    element: <Student_Home />,
  },
  {
    path: "/student_dashboard",
    element: <Student_Dashboard />,
  },
  {
    path: "/teacher_dashboard",
    element: <Teacher_Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </React.StrictMode>
);
