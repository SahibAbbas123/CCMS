import React from "react";
import { Link } from "react-router-dom";

const Navbar_Student = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-grey rounded"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <strong>CCMS</strong>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/student_dashboard">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="#"> */}
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar_Student;
