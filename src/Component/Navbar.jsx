import React from "react";
import NavLogo from '../Images/NavLogo.jpg'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-black fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><img className="NavLogo" src={NavLogo} alt="Jm" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon p-4 " ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/Services" tabindex="-1">Service</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
