// CourseList.tsx

import React from "react";

interface Course {
  id: number;
  name: string;
  category: "Offered" | "Upcoming";
}

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  // Filter courses by category
  const offeredCourses = courses.filter(
    (course) => course.category === "Offered"
  );
  const upcomingCourses = courses.filter(
    (course) => course.category === "Upcoming"
  );

  return (
    <div className="container mt-4">
      <h5 className="card-title mb-3 text-start">Offered Courses</h5>
      <div className="card mb-2">
        <div
          className="card-body"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          {" "}
          {/* Set max height and enable scrolling */}
          {/* <h5 className="card-title">Offered Courses</h5> */}
          <ul className="list-group list-group-flush">
            {offeredCourses.map((course) => (
              <li key={course.id} className="list-group-item">
                <a href={`/course/${course.id}`}>{course.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <h5 className="card-title mb-3 text-start">Upcoming Courses</h5>
      <div className="card mt-3 mb-3">
        <div
          className="card-body"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          {" "}
          {/* Set max height and enable scrolling */}
          <ul className="list-group list-group-flush">
            {upcomingCourses.map((course) => (
              <li key={course.id} className="list-group-item">
                <a href={`/course/${course.id}`}>{course.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
