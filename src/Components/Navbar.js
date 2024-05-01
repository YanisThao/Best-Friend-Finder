import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logout from "./Logout";
import logo from "../Images/Logo.png";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="custom-navbar">
      <div className="logo-section">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Animal Shelter Logo" />
          <span className="site-title">Best Friend Finder</span>
        </Link>
      </div>
      <div className="nav-menu-section">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <div className="dropdown">
          <span className="dropbtn">ADOPTION &#9660;</span>
          <div className="dropdown-content">
            <Link to="/available-dogs">Available Dogs</Link>
            <Link to="/available-cats">Available Cats</Link>
          </div>
        </div>
        <Link to="/give" className="nav-item">
          GIVE
        </Link>
        <Link to="/donate" className="nav-item donate">
          SHELTER
        </Link>
        <Link to="/about" className="nav-item contact">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-item contact">
          CONTACT US
        </Link>

      </div>
      <div className="auth-links">
        {user && user.isLoggedIn ? (
          <>
            <Link to="/profile" className="nav-item">
              Profile
            </Link>
            <Logout />
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item login">
              Login
            </Link>
            <Link to="/signup" className="nav-item signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
