import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link } from "react-router-dom";
import { changeNavbar, selectApp } from "../../features/appSlice";

function Navbar({ isDonatePage }) {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {!isDonatePage && (
        <Link to="/donate">
          <button className="donate_button">Donate</button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
