import React from "react";
import tick from "../../assets/tick-mark.svg";
import { Link } from "react-router-dom";
import "./ThankYou.css";
const ThankYou = ({ name, amount, email, txnid }) => {
  return (
    <div className="thankyou">
      <img src={tick} alt="tick" />
      <h2>Thanks, {`${name}`} </h2>
      <p>
        Your Donation of ₹ {`${amount}`} has been processed
        <br /> 100% of your money will fund CEWA Foundation
      </p>
      <div>
        <p>
          <span>Name:</span>
          {`${name}`}
        </p>
        <p>
          <span>Email:</span> {`${email}`}
        </p>
        <p>
          <span>Amount:</span> ₹ {`${amount}`}
        </p>
        <p>
          <span>Txn No.:</span>
          {`${txnid}`}{" "}
        </p>
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        Click here to goto Homepage
      </Link>
    </div>
  );
};

export default ThankYou;
