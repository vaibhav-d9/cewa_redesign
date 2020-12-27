import React from "react";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link as a } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar_links">
        <a>About</a>
        <a>Events</a>
        <a>Join Us</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
