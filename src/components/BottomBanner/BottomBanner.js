import React from "react";

import "./BottomBanner.css";
import bottomBanner from "../../assets/images/bottomBanner.jpg";

function BottomBanner() {
  return (
    <div className="bottomBanner">
      <div className="bottomBanner_overlay"></div>
      <img src={bottomBanner} alt="Bottom Banner" />
      <p className="bottomBanner_quote">"Let the entire world be happy"</p>
    </div>
  );
}

export default BottomBanner;
