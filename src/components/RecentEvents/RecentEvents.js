import React from "react";
import { Link } from "react-router-dom";
import RecentEventsItem from "../RecentEventsItem/RecentEventsItem";

import "./RecentEvents.css";

function RecentEvents() {
  return (
    <div className="recentEvents">
      <div className="recentEventsTop">
        <div className="recentEventsLeft">
          <h1 className="recentevents_header">Recent Events</h1>
          <p className="subHeader">@CEWA Foundation</p>
        </div>
      </div>

      <RecentEventsItem
        image="https://pbs.twimg.com/media/EzQlN0TVkAA1Jlk?format=jpg&name=large"
        title="Food Donation Drive"
        info="Close to a billion people – one-eighth of the world's population still live in hunger"
      />
      <RecentEventsItem
        image="https://pbs.twimg.com/media/Exu9KDyUUAADXXd?format=jpg&name=medium"
        title="Cloth Donation Drive"
        info="Let's make a fashion statement by donation"
      />
      <RecentEventsItem
        image="https://pbs.twimg.com/media/Ewm54ylXIAgfwDb?format=jpg&name=large"
        title="Food Donation Drive"
        info="Food packets and stationary items for study were distributed to the kids who sell flowers for their livings by CEWA Foundation."
      />
      <RecentEventsItem
        image="https://pbs.twimg.com/media/EvUHxwjUUAIAUpI?format=jpg&name=large"
        title="Food Donation Drive"
        info="In the 2019 Global Hunger Index, India ranks 102nd out of 117 qualifying countries."
      />

      <div className="viewAllButtonContainer">
        <Link to="/events" className="viewAll">
          View all events
        </Link>
      </div>
    </div>
  );
}

export default RecentEvents;
