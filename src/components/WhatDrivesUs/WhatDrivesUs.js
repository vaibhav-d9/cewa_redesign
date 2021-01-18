import React from "react";
import { Link } from "react-router-dom";

import "./WhatDrivesUs.css";

function WhatDrivesUs() {
  return (
    <div className="whatDrivesUs">
      <h1 className="whatDrivesUs_header">What drives us</h1>

      <ul>
        <li>
          In a country with a population of more than 1.3 billion, 1/3rd of them
          starve for their daily bread and hold the largest share of the world’s
          extreme poor.
        </li>

        <li>
          Additionally, India records a burgeon in malnutrition cases despite
          the booming economy as per the authorities.
        </li>

        <li>
          Due to fiscal needs or any supplementary reason, 3.9% of the total
          child population are working as main workers.
        </li>

        <li>
          Intertwined to child labor, more than 42.7 million children in India
          are out of school, further abating the literacy rate.
        </li>
      </ul>

      <p className="whatDriveUs_para">
        There’s no doubt that India’s at-risk children from the lower sections
        are to be rescued from these chains, holding them back from a promising
        future. This is what motivates us to further spread our reach and bestow
        our serviceability. We yearn for a more influential society free from
        all forms of exploitation and discrimination, where everyone has equal
        opportunities to perceive their potential.
      </p>
      <Link to="/joinus">Join Us</Link>
    </div>
  );
}

export default WhatDrivesUs;
