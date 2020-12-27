import React from "react";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link as a } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      <div className="navbar_links">
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/joinus">Join Us</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
