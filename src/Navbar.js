import React from 'react';

function Navbar() {
  const logo = "/images/logo.png"
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
      <span className="brand-text d-none d-lg-inline-block">Smart Savaari</span>
        <a href="#" className="navbar-brand">
          <img
            src={logo} 
            alt="Smart Savaari Logo"
            height="75px"
            className="logo-img d-inline-block align-top"
          />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
