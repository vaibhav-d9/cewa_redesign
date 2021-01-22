import React, { useState, useEffect, lazy, Suspense } from "react";

import "./Home.css";
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
      <Suspense fallback={<p>Loading...</p>}>
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
            <h1 className="feedbackForm_Header">Drop us a message!</h1>
            <p>We will get back to you..</p>
          </div>
          <div className="feedbackFormContainer_right">
            <FeedbackForm />
          </div>
        </div>

        <BottomBanner />
      </Suspense>
    </div>
  );
}

export default Home;
