import React from "react";
import Banner from "../Banner/Banner";
import OurVision from "../OurVision/OurVision";
import RecentEvents from "../RecentEvents/RecentEvents";

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
    </div>
  );
}

export default Home;
