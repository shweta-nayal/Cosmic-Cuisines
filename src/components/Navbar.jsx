import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaShoppingCart, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [astronautMode, setAstronautMode] = useState(false);

  // Toggle Astronaut Mode (Optional Fun Feature)
  const toggleAstronautMode = () => {
    setAstronautMode(!astronautMode);
    document.body.classList.toggle("astronaut-mode");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Space Diner Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#menu"> Planetary Plates</a></li>
        <li><a href="#events"> Space Station Events</a></li>
        <li><a href="#booking" className="reserve-btn"> Book Your Launch Pad</a></li>
        <li><a href="#merch"> Space Gear</a></li>
        <li><a href="#about"> Our Galactic Mission</a></li>
        <li><a href="#contact"> Send Us a Signal</a></li>
      </ul>

      {/* Social Media Icons & Astronaut Mode */}
      <div className="nav-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <button className="astronaut-toggle" onClick={toggleAstronautMode}>
          <FaMoon />
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
