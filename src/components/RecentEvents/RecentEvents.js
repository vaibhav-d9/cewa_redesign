import React from "react";
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

        <div className="recentEventsRight">
          <p className="viewAll">view all</p>
        </div>
      </div>

      <RecentEventsItem />
      <RecentEventsItem />
      <RecentEventsItem />
      <RecentEventsItem />
    </div>
  );
}

export default RecentEvents;
