import React, { useState } from "react";

import "./FeedbackForm.css";

function FeedbackForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feedbackForm">
      <form>
        <div className="name_input">
          <div className="firstname_input">
            <label for="firstname">Firstname</label>
            <input type="text" name="firstname" />
          </div>
          <div className="lastname_input">
            <label for="lastname">Lastname</label>
            <input type="text" name="lastname" />
          </div>
        </div>

        <div className="email_input">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="message_input">
          <label for="message">Your Message</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>

        <button onClick={handleFeedbackSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
