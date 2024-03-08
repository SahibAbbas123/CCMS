import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { courses } from "../LandingPage";
import App from "../App";
const CourseDetails = () => {
  const params = useParams();
  const id = Number(params.id);
  const course = courses.find((c) => c.id === id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back by one step in history
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url('../public/mymind-XUlsF9LYeVk-unsplash.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="card text-center" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h1 className="card-title">
            <strong>{course?.name}</strong>
          </h1>
          <h4 className="card-text py-3">{course?.description}</h4>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">
              <strong>Level:</strong> {course?.level}
            </li>
            <li className="list-group-item">
              <strong>Duration:</strong> {course?.duration}
            </li>
            <li className="list-group-item">
              <strong>Prerequisites:</strong> {course?.prerequisites}
            </li>
            <li className="list-group-item">
              <strong>Instructor:</strong> {course?.instructor}
            </li>
            <li className="list-group-item">
              <strong>Certification:</strong> {course?.certification}
            </li>
          </ul>
          <button className="btn btn-primary mt-3 me-2">Enroll Now</button>
          <button onClick={goBack} className="btn btn-outline-primary mt-3">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
