import React from "react";
import shivam from "../../assets/team/shivam-min-1.png";
import bhavya from "../../assets/team/Bhavya-min-1.png";
import gunjan from "../../assets/team/gunjan-min-1.png";
import harsh from "../../assets/team/harsh-min-1.png";
import kanishka from "../../assets/team/Kanishka-min-1.png";
import khushi from "../../assets/team/khushi-min-1.png";
import namish from "../../assets/team/namish-min-1.png";
import pps from "../../assets/team/pps-1.png";
import vaibhav from "../../assets/team/vaibhav-min-1.png";
import sachin from "../../assets/team/sachin-min-1.png";
import team from "../../assets/team/team-min.jpeg2133";
import ahsrah from "../../assets/team/ahsrah-min-1.png";
import rahul from "../../assets/team/rahul-1.png";
import pragati from "../../assets/team/pragati-min-1.png";
import "./Team.css";
import "animate.css/animate.min.css";
// import img from "react-optimized-image";

// import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="team">
        <div className="top-head">
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              width: "100vw",
              background: "#00000070",
            }}
          >
            <h1 style={{ lineHeight: "7rem", color: "#FFF" }}>Our Team</h1>
            <p
              style={{
                color: "#FFF",
                marginBottom: "2REM",
                textAlign: "CENTER",
              }}
            >
              It is amazing what can be accomplished when nobody cares about who
              gets the credit.
            </p>
          </div>
          <div style={{ width: "100vw" }}>
            <img src={team} alt="team" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="cards">
          <ScrollAnimation
            duration="3000"
            animateIn="fadeIn"
            animateOut="fadeOut"
          >
            <h1>BOARD OF DIRECTORS</h1>
            <span>
              <li
                style={{
                  // transform: "translate(0, 5rem)",
                  backgroundColor: "#124533",
                }}
              >
                <img src={pps} alt="pps" />
                <span className="hover">
                  <span className="name">Prakhar Pratap Singh</span>
                  <span className="desig">Co-Founder</span>
                </span>
              </li>
              <li
                style={{
                  // transform: "translate(0, -4rem)",
                  backgroundColor: "#759846",
                }}
              >
                <img src={ahsrah} alt="ahsrah" />{" "}
                <span className="hover">
                  <span className="name">Harsha Rani</span>
                  <span className="desig">Co-Founder </span>
                </span>
              </li>
              <li
                style={{
                  // transform: "translate(0, -4rem)",
                  backgroundColor: "#759846",
                }}
              >
                <img src={pragati} alt="pragati" />{" "}
                <span className="hover">
                  <span className="name">Pragati Singh</span>
                  <span className="desig">Treasurer </span>
                </span>
              </li>{" "}
              <li
                style={{
                  // transform: "translate(0, -4rem)",
                  backgroundColor: "#759846",
                }}
              >
                <img src={rahul} alt="rahul" />{" "}
                <span className="hover">
                  <span className="name">Rahul</span>
                  <span className="desig">Lead Management Expert</span>
                </span>
              </li>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <h1>EXECUTIVE EXPERT</h1>
            <span>
              <li
                style={{
                  // transform: "translate(0, 6rem)",
                  backgroundColor: "#894567",
                }}
              >
                <img src={vaibhav} alt="shivam" />{" "}
                <span className="hover">
                  <span className="name">Vaibhav</span>
                  <span className="desig">Technical Coordinator</span>
                </span>
              </li>
              <li
                style={{
                  // transform: "translate(-123px, -5rem)",
                  backgroundColor: "#021578",
                }}
              >
                <img src={shivam} alt="gunjan" />{" "}
                <span className="hover">
                  <span className="name">Shivam Srivastava</span>
                  <span className="desig">Technical Coordinator</span>
                </span>
              </li>
              <li
                style={{
                  // transform: "translate(-30rem, 0rem)",
                  backgroundColor: "#245968",
                }}
              >
                <img src={gunjan} alt="kanishka" />{" "}
                <span className="hover">
                  <span className="name">Gunjan Chaudhary</span>
                  <span className="desig">
                    Media Public Relation Coordinator
                  </span>
                </span>
              </li>
              <li
                style={{
                  // transform: "translate(0, 3rem)",
                  backgroundColor: "#764592",
                }}
              >
                <img src={bhavya} alt="vaubhav" />{" "}
                <span className="hover">
                  <span className="name">Bhavya Shree</span>
                  <span className="desig">
                    Media Public Relation Coordinator
                  </span>
                </span>
              </li>
            </span>
          </ScrollAnimation>
          <h1>SENIOR COORDINATORS</h1>
          <span>
            <li
              style={{
                // transform: "translate(-64px, -5rem)",
                backgroundColor: "#946823",
              }}
            >
              <img src={harsh} alt="bhavya" />{" "}
              <span className="hover">
                <span className="name">Harsh Gupta</span>
                <span className="desig">Management Coordinator</span>
              </span>
            </li>
            <li
              style={{
                // transform: "translate(0, -5rem)",
                backgroundColor: "#675923",
              }}
            >
              <img src={namish} alt="namish" />{" "}
              <span className="hover">
                <span className="name">Namish Patel</span>
                <span className="desig">Management Coordinator</span>
              </span>
            </li>
            <li
              style={{
                // transform: "translate(0, 4rem)",
                backgroundColor: "#163245",
              }}
            >
              <img src={khushi} alt="shivam" />{" "}
              <span className="hover">
                <span className="name">Khushi Srivastava</span>
                <span className="desig">Social Media Coordinator</span>
              </span>
            </li>
            <li
              style={{
                // transform: "translate(0, -5rem)",
                backgroundColor: "#342615",
              }}
            >
              <img src={sachin} alt="harsh" />{" "}
              <span className="hover">
                <span className="name">Sachin Bhghel</span>
                <span className="desig">Creative Coordinator</span>
              </span>
            </li>
            <li
              style={{
                // transform: "translate(0, 1rem)",
                backgroundColor: "#345698",
              }}
            >
              <img src={kanishka} alt="sachin" />

              <span className="hover">
                <span className="name">Kanishka</span>
                <span className="desig">Marketing Coordinator</span>
              </span>
            </li>
          </span>
        </div>
      </div>
    );
  }
}

export default Team;
