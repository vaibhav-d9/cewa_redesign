import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import BannerMobile from "../BannerMobile/BannerMobile";
import BottomBanner from "../BottomBanner/BottomBanner";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import OurVision from "../OurVision/OurVision";
import RecentEvents from "../RecentEvents/RecentEvents";
import WhatDrivesUs from "../WhatDrivesUs/WhatDrivesUs";

import "./Home.css";

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
      {isMobile ? <BannerMobile /> : <Banner />}

      <div className="section1">
        <div className="ourVision_container">
          <OurVision />
        </div>

        <div className="recentEvents_container">
          <RecentEvents />
        </div>
      </div>

      <WhatDrivesUs />

      <div className="feedbackForm_container">
        <div className="feedbackFormContainer_left">
          <h1 className="feedbackForm_Header">Drop us a message!</h1>
          <p>We will get back to you..</p>
        </div>
        <div className="feedbackFormContainer_right">
          <FeedbackForm />
        </div>
      </div>

      <BottomBanner />
    </div>
  );
}

export default Home;
