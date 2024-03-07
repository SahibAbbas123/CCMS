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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
