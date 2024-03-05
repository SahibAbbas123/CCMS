// CourseList.tsx

import React from 'react';

interface Course {
  id: number;
  name: string;
}

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Course List</h5>
          <ul className="list-group list-group-flush">
            {courses.map(course => (
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
