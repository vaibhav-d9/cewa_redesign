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

      <RecentEventsItem />
      <RecentEventsItem />
      <RecentEventsItem />
      <RecentEventsItem />

      <div className="viewAllButtonContainer">
        <Link to="/events" className="viewAll">
          View all events
        </Link>
      </div>
    </div>
  );
}

export default RecentEvents;
