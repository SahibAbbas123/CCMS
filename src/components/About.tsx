// About.tsx

import React from "react";

const About: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid">
        {" "}
        {/* Use container-fluid to make the container full-width */}
        <div className="row">
          <div className="col">
            {" "}
            {/* Use a column to take up the whole horizontal space */}
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              magna eget sapien scelerisque consectetur. Integer non maximus
              nulla. Morbi fermentum tristique felis, sit amet tempor ipsum
              pharetra eu. Fusce commodo urna ac luctus viverra.
            </p>
          </div>
          <div className="col">
            <h2>Contact Information</h2>
            <ul>
              <li>Email: example@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
              <li>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/your-profile">
                  Your LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default About;
