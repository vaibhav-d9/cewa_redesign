import React from "react";
import { Link } from "react-router-dom";

import "./BannerMobile.css";
import BannerImg from "../../assets/images/bannerImg.jpg";
import Button from "@material-ui/core/Button";

function BannerMobile() {
  return (
    <div className="bannerMobile">
      <div className="bannerMobile_img">
        <div className="bannerMobile_colorOverlay"></div>
        <img src={BannerImg} alt="bannerMobile" />

        <div className="bannerMobile_overlay">
          <h1>We are the</h1>
          <h2>Future</h2>

          <p className="bannerMobile_quote">
            "There can be no keener revelation of a society's soul than the way
            in which it treats its children." — Nelson Mandela
          </p>

          <Link to="/joinus">
            <Button className="joinus_Button" href="/joinus">
              Join us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerMobile;
