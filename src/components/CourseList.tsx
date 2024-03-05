//CourseList.tsx
import React from "react";

interface Course {
  id: number;
  name: string;
  level: string; // Add level property to the Course interface
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
    <div className="container mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="row">
        <div className="col-lg-6">
          <h5 className="card-title mb-3 text-start">Offered Courses</h5>
          <div className="card mb-2">
            <div
              className="card-body"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              <ul className="list-group list-group-flush">
                {offeredCourses.map((course) => (
                  <li
                    key={course.id}
                    className="list-group-item cursor-pointer d-flex flex-column align-items-start" // Add flexbox classes
                    style={{ textDecoration: "none" }} // Remove underline
                    onClick={() => console.log(`Clicked on ${course.name}`)} // Add onClick event handler
                  >
                    <a
                      href={`/course/${course.id}`}
                      style={{ color: "black", fontWeight: "bold" }} // Style the anchor tag
                    >
                      {course.name}
                    </a>
                    <span style={{ fontWeight: "normal" }}>{course.level}</span> {/* Display course level */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="card-title mb-3 text-start">Upcoming Courses</h5>
          <div className="card mt-3 mb-3">
            <div
              className="card-body"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              <ul className="list-group list-group-flush">
                {upcomingCourses.map((course) => (
                  <li
                    key={course.id}
                    className="list-group-item cursor-pointer d-flex flex-column align-items-start" // Add flexbox classes
                    style={{ textDecoration: "none" }} // Remove underline
                    onClick={() => console.log(`Clicked on ${course.name}`)} // Add onClick event handler
                  >
                    <a
                      href={`/course/${course.id}`}
                      style={{ color: "black", fontWeight: "bold" }} // Style the anchor tag
                    >
                      {course.name}
                    </a>
                    <span style={{ fontWeight: "normal" }}>{course.level}</span> {/* Display course level */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
