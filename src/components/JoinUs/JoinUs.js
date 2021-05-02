import React, { useState, useEffect } from "react";
import "./JoinUs.css";
import Button from "@material-ui/core/Button";

function JoinUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMembershipFormSubmit = (e) => {
    e.preventDefault();

    fetch("https://cewa-backend.herokuapp.com/membership", {
      method: "POST",
      body: {
        name,
        email,
        phone,
        dob,
        sex,
        profession,
        city,
        country,
      },
    });
  };

  return (
    <div className="joinUs">
      <div className="joinUs_left">
        <div className="overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Poor children"
        />
      </div>
      <div className="joinUs_right">
        <h1 className="membershipForm_header">Become a member</h1>
        <p className="membershipForm_subheader">Be the change</p>
        <form className="membershipForm" style={{ maxWidth: "90vw" }}>
          <div className="membershipForm_field">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="sex">Sex</label>
            <select
              name="sex"
              onChange={(e) => setSex(e.target.value)}
              value={sex}
            >
              <option value="null">--Select--</option>
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="membershipForm_field">
            <label for="profession">Profession</label>
            <input
              type="text"
              name="profession"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="city">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="country">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>

          <Button onClick={handleMembershipFormSubmit}>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
