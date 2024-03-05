import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CCMS</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula massa ut lectus sodales, nec interdum velit ultricies. Fusce rhoncus hendrerit risus, at tempus tortor vehicula sit amet. Duis nec magna convallis, sagittis lacus ut, tempus justo. Nullam sit amet turpis urna. Nulla ac finibus sapien. In hac habitasse platea dictumst. Integer posuere quam vitae metus feugiat, a fermentum libero volutpat. Vivamus sit amet mi id urna dignissim mattis. Nam a purus ligula. Vestibulum non diam nec nulla pharetra dignissim. Nulla facilisi.
    </p>
  </div>
  </>
  );
}

export default Navbar;
