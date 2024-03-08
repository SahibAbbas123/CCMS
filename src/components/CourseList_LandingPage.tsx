//CourseList.tsx --deprecated
//do not use this anymore
import React from "react";

export interface Course {
  id: number;
  name: string;
  description: string;
  level: string; // Add level property to the Course interface
  category: "Offered" | "Upcoming" | "Assigned" | "Enrolled";
  duration: string;
  prerequisites: string;
  instructor: string;
  certification: string;

}

interface Props {
  courses: Course[];
}

const CourseList = ({ courses }: Props) => {
  // Filter courses by category
  const offeredCourses = courses.filter(
    (course: Course) => course.category === "Offered"
  );
  const upcomingCourses = courses.filter(
    (course: Course) => course.category === "Upcoming"
  );
  const assignedCourses = courses.filter(
    (course: Course) => course.category === "Assigned"
  );
  const enrolledCourses = courses.filter(
    (course: Course) => course.category === "Enrolled"
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
                {offeredCourses.map((course: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; level: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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
                {upcomingCourses.map((course: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; level: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                  <li
                    key={course.id}
                    className="list-group-item cursor-pointer d-flex flex-column align-items-start"
                    style={{ textDecoration: "none" }}
                    onClick={() => console.log(`Clicked on ${course.name}`)}
                  >
                    <a
                      href={`/course/${course.id}`}
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {course.name}
                    </a>
                    <span style={{ fontWeight: "normal" }}>{course.level}</span>
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
