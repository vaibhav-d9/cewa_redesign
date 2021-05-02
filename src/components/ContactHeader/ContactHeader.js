import React from "react";

import "./ContactHeader.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div className="contactHeader">
      <div className="contactHeader_left">
        <div className="contactHeader_phone">
          <PhoneIcon />
          <a href="tel:9870233978">9821782988</a>
        </div>
        <div className="contactHeader_email">
          <EmailIcon />
          <a href="mailto:ngocewa@gmail.com" target="_blank_">
            ngocewa@gmail.com
          </a>
        </div>
      </div>
      <div className="contactHeader_right">
        <a
          href="https://www.facebook.com/cewa.ngo.37?epa=SEARCH_BOX"
          target="_blank_"
        >
          <FacebookIcon className="socialmedia_icon" />
        </a>
        <a href="https://www.instagram.com/_cewa_foundation_/" target="_blank_">
          <InstagramIcon className="socialmedia_icon" />
        </a>
        <a href="https://twitter.com/NgoCewa" target="_blank_">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default ContactHeader;
