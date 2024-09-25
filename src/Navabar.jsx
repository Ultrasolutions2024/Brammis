import React from 'react';
import logo from './assets/images/brahmmis logo recreate.png'; // Update the path as needed

function Navabar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={logo} alt="Brand Logo" style={{ width: '90px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-1">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#about-us">About Us</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#our-menu">Our Menu</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item pe-1" style={{backgroundColor:"#000000",borderRadius:"10px",color:"white"}}>
              <a href="https://wa.me/7010652833" target='blank' className="nav-link"  style={{color:"white"}}>
                Booking Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navabar;
