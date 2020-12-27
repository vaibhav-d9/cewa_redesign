import React from "react";
import Banner from "../Banner/Banner";
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
    </div>
  );
}

export default Home;
