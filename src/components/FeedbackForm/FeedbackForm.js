import React, { useState } from "react";
import SweetAlert from "sweetalert-react";
import swal from "@sweetalert/with-react";

import "./FeedbackForm.css";
import "sweetalert/dist/sweetalert.css";

function FeedbackForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firstnameValidationError, setFirstnameValidationError] = useState(
    false
  );
  const [lastnameValidationError, setLastnameValidationError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [messageValidationError, setMessageValidationError] = useState(false);
  const [show, setShow] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (firstname == "") {
      setFirstnameValidationError(true);
    } else {
      setFirstnameValidationError(false);
    }
    if (lastname == "") {
      setLastnameValidationError(true);
    } else {
      setLastnameValidationError(false);
    }
    if (email == "") {
      setEmailValidationError(true);
    } else {
      setEmailValidationError(false);
    }
    if (message == "") {
      setMessageValidationError(true);
    } else {
      setMessageValidationError(false);
    }

    if (
      firstnameValidationError ||
      lastnameValidationError ||
      emailValidationError ||
      messageValidationError
    ) {
      return;
    } else {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");

      fetch("http://localhost:5000/feedback", {
        method: "POST",
        body: {
          firstname,
          lastname,
          email,
          message,
        },
      });

      // swal(
      //   "Thank You!",
      //   "Your message was sent to us successfully.",
      //   "success"
      // );
    }
  };

  return (
    <div className="feedbackForm">
      <form>
        <div className="name_input">
          <div className="firstname_input">
            <label for="firstname">
              Firstname<small>*</small>
            </label>

            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {firstnameValidationError && (
              <small className="feedbackFormValidationError">
                Firstname can't be empty
              </small>
            )}
          </div>
          <div className="lastname_input">
            <label for="lastname">
              Lastname<small>*</small>
            </label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            {lastnameValidationError && (
              <small className="feedbackFormValidationError">
                Lastname can't be empty
              </small>
            )}
          </div>
        </div>

        <div className="email_input">
          <label for="email">
            Email<small>*</small>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailValidationError && (
            <small className="feedbackFormValidationError">
              Email can't be empty
            </small>
          )}
        </div>
        <div className="message_input">
          <label for="message">
            Your Message <small>*</small>{" "}
          </label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageValidationError && (
            <small className="feedbackFormValidationError">
              Message can't be empty
            </small>
          )}
        </div>

        <button onClick={handleFeedbackSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
