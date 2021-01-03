import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link } from "react-router-dom";
import { changeNavbar, selectApp } from "../../features/appSlice";

function Navbar() {
  const dispatch = useDispatch();
  const handleNavbarChange = () => {
    dispatch(changeNavbar(true));
  };
  const handleHomeNavigation = () => {
    dispatch(changeNavbar(false));
  };

  const homeScreen = useSelector(selectApp);

  return (
    <div className={homeScreen ? "navbar_" : "navbar"}>
      <div className="navbar_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className={homeScreen ? "navbar_Links" : "navbar_links"}>
        <Link to="/" onClick={handleHomeNavigation}>
          Home
        </Link>
        <Link to="/about" onClick={handleNavbarChange}>
          About
        </Link>
        <Link to="/events" onClick={handleNavbarChange}>
          Events
        </Link>
        <Link to="/joinus" onClick={handleNavbarChange}>
          Join Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
