import React, { useState } from "react";
import './Navbar.css';  // Ensure you have the appropriate CSS file
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <h3 className="logo">Talkster</h3>
      </div>
      <div className={`center ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/createyours">Be the Author!</a></li>
          <li><a href="/login">Login</a></li>

        </ul>
      </div>
      <div className="right">
        <a href="/profile"><FaUserCircle className="text-4xl" /></a>
      </div>


      <div className="hamburger" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;