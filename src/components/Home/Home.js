import React from "react";
import Banner from "../Banner/Banner";
import BottomBanner from "../BottomBanner/BottomBanner";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import OurVision from "../OurVision/OurVision";
import RecentEvents from "../RecentEvents/RecentEvents";
import WhatDrivesUs from "../WhatDrivesUs/WhatDrivesUs";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

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
