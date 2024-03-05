import React from 'react';

interface Course {
  id: number;
  name: string;
  description: string;
  level: string;
  duration: string;
  prerequisites: string;
  instructor: string;
  certification: string;
}

interface Props {
  course: Course;
}

const CourseDetails: React.FC<Props> = ({ course }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card text-center" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h1 className="card-title"><strong>{course.name}</strong></h1>
          <h4 className="card-text py-3">{course.description}</h4>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item"><strong>Level:</strong> {course.level}</li>
            <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
            <li className="list-group-item"><strong>Prerequisites:</strong> {course.prerequisites}</li>
            <li className="list-group-item"><strong>Instructor:</strong> {course.instructor}</li>
            <li className="list-group-item"><strong>Certification:</strong> {course.certification}</li>
          </ul>
          <button className="btn btn-primary mt-3">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
