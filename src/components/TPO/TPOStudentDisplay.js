import React from "react";
import Sidebar from "./TPOSlideBar";
import { useEffect, useState } from "react";
import "./TPOStudentDisplay.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import axios from "axios";
import { Redirect } from "react-router-dom";

function TPOInsightsCode() {
  const [role, setRole] = useState("");

  const [userData, setUserData] = useState({
    name: {
      firstName: "",
      middleName: "",
      lastName: ""
    },
    branch: "",
    yearOfPassing: 0,
    company: "",
    driveLink: {
      webViewLink: "",
      webContentLink: "",
      id: ""
    },
    linkedinProfile: "",
    timestamp: ""
  });

  const placementDetails = [
    {
      name: "Nikhil Danapgol",
      branch: "CSE",
      yearOfPassing: "2023",
      company: "Unknown",
      interViewExperience: "dont know",
      linkedinProfile: "abc"
    },
    {
      name: "Rutwik Sawant",
      branch: "CSE",
      yearOfPassing: "2023",
      company: "Google",
      interViewExperience: "dont know",
      linkedinProfile: "xyz"
    },
    {
      name: "Nikhil Danapgol",
      branch: "CSE",
      yearOfPassing: "2023",
      company: "Unknown",
      interViewExperience: "dont know",
      linkedinProfile: "abc"
    }
  ];
  useEffect(() => {
    axios
      .get("https://afternoon-ocean-57702.herokuapp.com/login", {
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
        if (res.data.loggedIn === false) setRole("invalid");
        else {
          setRole(res.data.decodedData.role);

          axios
            .get("https://afternoon-ocean-57702.herokuapp.com/placement")
            .then((data) => {
              console.log("Recived data :", data);
              setUserData(data.data);
            })
            .catch((err) => {
              console.log("error");
              console.log(err.message);
            });
        }
      })
      .catch((err) => {
        console.log("error");
        console.log(err.message);
        setRole("invalid");
      });
  }, []);
  return (
    <div>
      {role === "invalid" ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <div class="TPORow">
            <div class="TPOColumn">
              <div class="card">
                <Flippy
                  flipOnHover={true} // default false
                  flipOnClick={false} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: "100%", height: "220px" }} /// these are optional style, it is not necessary
                >
                  <FrontSide
                    style={{
                      backgroundColor: "white"
                    }}
                  >
                    <h3>{placementDetails[0].name}</h3>
                    <h3>Company : {placementDetails[0].company}</h3>
                    <h3>Branch : {placementDetails[0].branch}</h3>
                  </FrontSide>
                  <BackSide style={{ backgroundColor: "white" }}>
                    <h3>
                      Year of Passing : {placementDetails[0].yearOfPassing}
                    </h3>
                    <h3>
                      Interview Experience :{" "}
                      {placementDetails[0].interViewExperience}
                    </h3>
                    <h3>
                      Linkedin Profile : {placementDetails[0].linkedinProfile}
                    </h3>
                  </BackSide>
                </Flippy>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TPOStudentDisplay() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1 style={{ textAlign: "center" }}>PlacementInsights</h1>
        <br />
        <br />
        <TPOInsightsCode />
      </div>
    </div>
  );
}

export default TPOStudentDisplay;
