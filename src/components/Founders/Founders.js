import React from "react";

import "./Founders.css";
import prakhar from "../../assets/images/prakhar1.webp";
import harsha from "../../assets/images/harsha1.webp";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";

function Founders() {
  return (
    <div className="founders">
      <div className="founders_main">
        <div className="founders_prakhar">
          <div className="foundersImg_container">
            <img src={prakhar} alt="Prakhar Founder" className="founders_img" />
          </div>

          <div className="foundersPrakhar_main">
            <FormatQuoteRoundedIcon />
            <p className="founders_quote">
              I believe every child is entitled to equal rights, and those
              rights must be protected, regardless of where one is born. Because
              what matters is what they grow up to be.
            </p>

            <p className="founders_name">Prakhar Pratap Singh</p>
            <small className="desig">Founder</small>
          </div>
        </div>
        <div className="founders_harsha">
          <div className="foundersImg_container">
            <img src={harsha} alt="Harsha Founder" className="founders_img" />
          </div>

          <div className="foundersHarsha_main">
            <FormatQuoteRoundedIcon />
            <p className="founders_quote">
              It is easier to mold the life of a naive child rather than a
              broken man. If a child is helped, he becomes helpful and grows to
              look beyond himself to the welfare of others.
            </p>
            <p className="founders_name">Harsha Rani</p>
            <small className="desig">Founder</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
