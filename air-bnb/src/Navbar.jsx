import React from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navigation-bar">
      {/* 🏠 Left - Logo */}
      <div className="nav-left">
        <img src="/images/logo.png" alt="Airbnb Logo" className="air-logo" />
      </div>

      {/* 🔖 Center - Tabs */}
      <div className="nav-center">
        <a href="#homes" className="nav-link active">Homes</a>
        <a href="#experiences" className="nav-link">Experiences</a>
        <a href="#services" className="nav-link">Services</a>
      </div>

      {/* 🔍 Right - Search and Profile */}
      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Where to?" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <div className="user-icon">
          <FaUserCircle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
