import React from "react";
import { useState } from "react";

import "./JoinUs.css";

function JoinUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleMembershipFormSubmit = (e) => {
    e.preventDefault();
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
        <form className="membershipForm">
          <div className="membershipForm_field">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
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
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </div>

          <div className="membershipForm_field">
            <label for="sex">Sex</label>
            <select name="sex" onChange={(e) => setSex(e.target.value)}>
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
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>

          <button onClick={handleMembershipFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
