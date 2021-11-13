import React from "react";
import Sidebar from "./TPOSlideBar";
import "../Profile.css";
function Profile() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="profileImg" style={{ marginTop: "12px" }}>
          <img
            style={{ borderRadius: "50%", width: "250px" }}
            src="https://uni.wcoeapps.in/site/static/images/wcoe.jpg"
            alt="wce"
          />
          <hr />
        </div>
        <br />
        <div className="profileHeading">
          <h5>
            <br />
            First Name <br />
            <br />
            <br />
            <br />
            Last Name <br />
            <br />
            <br />
            <br />
            PRN <br />
            <br />
            <br />
            <br />
            Email <br />
            <br />
            <br />
            <br />
            Phone <br />
            <br />
            <br />
            <br />
            Resources Uploaded <br />
            <br />
            <br />
            <br />
            Branch <br />
            <br />
            <br />
          </h5>
        </div>
        <div className="profileContent">
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            Nikhil
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            Danapgol
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            2019BTECS00036
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            nikhil.danapgol@walchandsangli.ac.in
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            9529172766
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            5
          </h5>
          <h5
            style={{
              borderStyle: "ridge ",
              width: "75%",
              display: "relative",
              padding: "10px"
            }}
          >
            CSE
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
