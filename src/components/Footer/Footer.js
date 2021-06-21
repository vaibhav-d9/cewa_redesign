import React from "react";
import { Link } from "react-router-dom";
import logo from "../../CEWAlogo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        All Rights Reserved. <b>|</b> Copyright © 2020 Cewa Organisation{" "}
        <b>|</b>{" "}
        <Link
          to="/privacy"
          style={{
            color: "#fff",
            textDecoration: "none",
            textDecorationLine: "none",
          }}
        >
          <span>PRIVACY POLICY</span>
        </Link>{" "}
        <b>|</b>
        <Link
          to="termsandconditions"
          style={{
            color: "#fff",
            textDecoration: "none",
            textDecorationLine: "none",
          }}
        >
          {" "}
          TERMS AND CONDITIONS
        </Link>
      </p>
      <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
      {/* <div className="footer-social">
        <div>
          <li>Facebook</li>
          <li>Youtube</li>
          <li> Instagram</li>
        </div>
        <div>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}

export default Footer;
