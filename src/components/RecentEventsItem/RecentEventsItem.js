import React from "react";

import "./RecentEventsItem.css";

function RecentEventsItem({ id, image, title, info }) {
  return (
    <div className="recentEventsItem">
      <div className="recentEventsItem_image">
        <img
          src={image}
          alt="recentEventItem_image"
          style={{ width: "70px" }}
        />
      </div>

      <div className="recentEventsItem_info">
        <h1 className="recentEventsItem_header">{title}</h1>

        <p className="recentEventsItem_para">{info}</p>
      </div>
    </div>
  );
}

export default RecentEventsItem;
