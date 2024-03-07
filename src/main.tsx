import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LandingPage from './LandingPage.tsx';
import CourseDetails from "./components/CourseDetails.tsx";
import SignUpPage from "./components/SignupPage.tsx";
import LoginPage from "./components/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    // children: [
    //   {
    //     path: "course/:id",
    //     element: <CourseDetails course={course} />,
    //   },
    // ],
    
  },
  {
    path: "course/:id",
    element: <CourseDetails  />,
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </React.StrictMode>,
)
