import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";
import { Link } from "react-router-dom";
import { changeNavbar, selectApp } from "../../features/appSlice";

function Navbar() {
  const dispatch = useDispatch();
  const handleHomeNavigation = () => {
    dispatch(changeNavbar(false));
  };

  const homeScreen = useSelector(selectApp);

  return (
    <div className={homeScreen ? "navbar_" : "navbar"}>
      <div className="navbar_logo">
        <Link to="/" onClick={handleHomeNavigation}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
