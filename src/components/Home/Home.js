import React, { useState, useEffect, lazy, Suspense } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import IconButton from "@material-ui/core/IconButton";
import Loading from "../Loading/Loading";

const About = lazy(() => import("../About/About"));
const Banner = lazy(() => import("../Banner/Banner"));
const BannerMobile = lazy(() => import("../BannerMobile/BannerMobile"));
const FeedbackForm = lazy(() => import("../FeedbackForm/FeedbackForm"));
const Founders = lazy(() => import("../Founders/Founders"));
const OurVision = lazy(() => import("../OurVision/OurVision"));
const RecentEvents = lazy(() => import("../RecentEvents/RecentEvents"));
const WhatDrivesUs = lazy(() => import("../WhatDrivesUs/WhatDrivesUs"));
const BottomBanner = lazy(() => import("../BottomBanner/BottomBanner"));

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    detectWindowSize();
  }, []);

  function detectWindowSize() {
    window.innerWidth <= 882 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  return (
    <div className="home">
      <Suspense fallback={<Loading />}>
        {isMobile ? <BannerMobile /> : <Banner />}

        <div className="section1">
          <div className="ourVision_container">
            <About />
          </div>

          <div className="recentEvents_container">
            <RecentEvents />
          </div>
        </div>

        <WhatDrivesUs />

        <OurVision />

        <Founders />

        <div className="feedbackForm_container">
          <div className="feedbackFormContainer_left">
            <h1 className="feedbackForm_Header">get in touch..</h1>
            <FeedbackForm />
          </div>
          <div className="feedbackFormContainer_right">
            <p className="feedbackFormRight_header">Reach out to us</p>

            <div className="feedbackFormContainer_address">
              <a>
                <LocationOnIcon />
                <p>653/A, Naiyyar Colony, Gonda pin - 271001</p>
              </a>
            </div>
            <div className="feedbackFormContainer_phone">
              <a href="tel:9821782988">
                <PhoneIcon />
                <p>+91 982-178-2988</p>
              </a>
            </div>
            <div className="feedbackFormContainer_email">
              <a href="mailto:ngocewa@gmail.com">
                <EmailIcon />
                <p>ngocewa@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <BottomBanner />
      </Suspense>
    </div>
  );
}

export default Home;
