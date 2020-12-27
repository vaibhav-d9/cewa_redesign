import React from "react";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar_links">
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/joinus">Join Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
