import React from "react";

import "./Founders.css";
import prakhar from "../../assets/images/prakhar1.jpg";
import harsha from "../../assets/images/harsha1.jpg";

function Founders() {
  return (
    <div className="founders">
      <h1 className="founders_header">From the founders</h1>

      <div className="founders_main">
        <div className="founders_prakhar">
          <div className="foundersImg_container">
            <img src={prakhar} alt="Prakhar Founder" className="founders_img" />
          </div>

          <p className="founders_name">Prakhar Pratap Singh</p>
          <p className="founders_quote">
            "I believe every child is entitled to equal rights, and those rights
            must be protected, regardless of where one is born. Because what
            matters is what they grow up to be.""
          </p>
        </div>
        <div className="founders_harsha">
          <div className="foundersImg_container">
            <img src={harsha} alt="Harsha Founder" className="founders_img" />
          </div>

          <p className="founders_name">Harsha Rani</p>
          <p className="founders_quote">
            "It is easier to mold the life of a naive child rather than a broken
            man. If a child is helped, he becomes helpful and grows to look
            beyond himself to the welfare of others."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Founders;
