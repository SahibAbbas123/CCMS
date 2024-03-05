// CourseList.tsx

import React from 'react';

interface Course {
  id: number;
  name: string;
  category: 'Offered' | 'Upcoming'; // Added category property
}

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  // Filter courses by category
  const offeredCourses = courses.filter(course => course.category === 'Offered');
  const upcomingCourses = courses.filter(course => course.category === 'Upcoming');

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Offered Courses</h5>
          <ul className="list-group list-group-flush">
            {offeredCourses.map(course => (
              <li key={course.id} className="list-group-item">
                <a href={`/course/${course.id}`}>{course.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Upcoming Courses</h5>
          <ul className="list-group list-group-flush">
            {upcomingCourses.map(course => (
              <li key={course.id} className="list-group-item">
                <a href={`/course/${course.id}`}>{course.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
