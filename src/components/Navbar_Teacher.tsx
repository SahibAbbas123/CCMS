import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar_Teacher = () => {
  const navigate = useNavigate();

  // Define a function to handle the logout click
  const handleLogout = (event: { preventDefault: () => void; }) => {
    // Show a confirmation dialog with a message
    const reallyLogout = confirm("Do you really want to log out?");
    // If the user clicks OK, navigate to the logout page
    if (reallyLogout) {
      navigate("/");
    }
    // Otherwise, do nothing and stay on the same page
    else {
      event.preventDefault();
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-grey rounded"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="/teacher">
            <strong>CCMS</strong>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/teacher_dashboard">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="#"> */}
                <Link className="nav-link" to="/" onClick={handleLogout}>
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

export default Navbar_Teacher;
