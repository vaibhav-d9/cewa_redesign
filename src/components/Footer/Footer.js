import React from "react";
import { Link } from "react-router-dom";

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
          <span>Privacy Policy</span>
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
          Terms and Conditions
        </Link>
      </p>
    </div>
  );
}

export default Footer;
