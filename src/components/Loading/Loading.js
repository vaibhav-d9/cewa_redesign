import React from "react";
import logo from "../../CEWAlogo.png";
import loading from "../../assets/800.svg";
const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
        flexDirection: "column",
        alignSelf: "center",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "20rem" }} />
      <img src={loading} alt="loading" style={{ width: "5rem" }} />
      {/* <h2>Loading...</h2> */}
    </div>
  );
};
export default Loading;
