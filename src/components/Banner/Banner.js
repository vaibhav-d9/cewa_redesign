import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";
import BannerImg from "../../assets/images/bannerImg.jpg";
import Button from "@material-ui/core/Button";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_left">
        <h1>We are the</h1>
        <h2>Future</h2>

        <p className="banner_quote">
          "There can be no keener revelation of a society's soul than the way in
          which it treats its children." — Nelson Mandela
        </p>
        <Link to="/joinus">
          <Button className="joinus_button" href="/joinus">
            Join us
          </Button>
        </Link>
      </div>

      <div className="banner_right">
        <div className="overlay"></div>
        <img src={BannerImg} alt="bannerImg" />
      </div>
    </div>
  );
}

export default Banner;
