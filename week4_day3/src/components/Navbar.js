import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Task 2: Navigation Bar Component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile navbar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand / Logo */}
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          ⚛️ MyReactApp
        </NavLink>

        {/* Mobile Hamburger Button */}
        <button className="nav-toggle-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>

        {/* Navigation Links using <NavLink> with active link highlighting */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>

          {/* Quick link to test dynamic route */}
          <NavLink
            to="/post/1"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Post #1
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
