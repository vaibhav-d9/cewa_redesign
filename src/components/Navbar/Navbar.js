import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";
import Logo from "../../CEWAlogo.png";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="nav-buttons">
          <li>
            <Link
              style={{
                margin: " 0 1rem",
                color: "#ec5f24",
                textDecoration: "none",
              }}
              to="joinus"
            >
              Join Us
            </Link>
          </li>

          <li>
            <Link
              style={{
                margin: " 0 1rem ",
                color: "#ec5f24",
                textDecoration: "none",
              }}
              to="team"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              style={{
                margin: " 0 1rem ",
                color: "#ec5f24",
                textDecoration: "none",
              }}
              to="events"
            >
              Events
            </Link>
          </li>
        </div>
        {!isDonatePage && (
          <Link to="/donate">
            <button className="donate_button">Donate</button>
          </Link>
        )}
        <div
          className="nav-buttons"
          style={{ margin: "0 1rem", fontSize: "2rem", color: "#ec5f24" }}
        >
          |
        </div>
        <div className="feedbackFormContainer_social">
          <a
            href="https://www.facebook.com/cewa.ngo.37?epa=SEARCH_BOX"
            target="_blank"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>

          <a href="https://twitter.com/NgoCewa" target="_blank">
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </a>

          <a
            href="https://www.instagram.com/_cewa_foundation_/"
            target="_blank"
          >
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/company/cewa-foundation/"
            target="_blank"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>

          <a
            href="https://www.youtube.com/channel/UCqlu42Q07WeEzaGevsouB_w"
            target="_blank"
          >
            <IconButton>
              <YouTubeIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
