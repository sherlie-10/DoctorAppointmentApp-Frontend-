import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";
import logo from "../assets/images/favicon.png";

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Your Dr Logo" className="logo-img" />
            <span> Your Doctor </span>
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/appointment-form" className="nav-link">Book Appointment</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/service" className="nav-link">Service</Link>
            </li>
            <li>
              <button className="emergency-btn" onClick={togglePopup}>
                Emergency Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-message">
            <span className="popup-close" onClick={togglePopup}>
              &times;
            </span>
            <h2>Emergency Contact</h2>
            <p>If you have a medical emergency, please call:</p>
            <p>
              <strong>+91 234 567 890</strong>
            </p>
            <p>Our team will assist you immediately.</p>
            <button className="popup-close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
