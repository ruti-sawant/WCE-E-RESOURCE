import React from "react";
import TPOSidebar from "./TPOSlideBar";
import StudentSidebar from "../Sidebar";
import { useEffect, useState } from "react";
import "./TPOStudentDisplay.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";

function SingleCard(props) {
  console.log("in single card", props.data);
  const placementDetails = {
    name: props.data.name.firstName + " " + props.data.name.lastName,
    branch: props.data.branch,
    yearOfPassing: props.data.yearOfPassing,
    company: props.data.company,
    interViewExperience: props.data.driveLink.webViewLink,
    linkedinProfile: props.data.linkedinProfile
  };
  return (
    <div class="TPOColumn">
      <div class="card">
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ width: "100%", height: "100%" }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: "white"
            }}
          >
            <h3>{placementDetails.name}</h3>
            <hr />
            <h3>Company : {placementDetails.company}</h3>
            <hr />
            <h3>Branch : {placementDetails.branch}</h3>
          </FrontSide>
          <BackSide style={{ backgroundColor: "white" }}>
            <h3>Year of Passing : {placementDetails.yearOfPassing}</h3>
            <hr />
            <h3>
              <a href={placementDetails.interViewExperience}>
                Interview Experience
              </a>
            </h3>

            <hr />
            <h3>
              <a href={placementDetails.linkedinProfile}>Linkedin Profile</a>
            </h3>
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
}

function TPOInsightsCode() {
  const [role, setRole] = useState("");
  const [cardArray, setCardArray] = useState([]);
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
              let receivedData = data.data;
              for (let i = 0; i < receivedData.length; i++) {
                console.log(receivedData[i]);
                setCardArray((arr) =>
                  arr.concat(<SingleCard data={receivedData[i]} />)
                );
              }
              // setUserData(data.data);
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
            {/* <SingleCard /> */}

            {cardArray}
          </div>
        </div>
      )}
    </div>
  );
}

function TPOStudentDisplay() {
  const { fromWhere } = useParams();
  console.log(fromWhere);

  return (
    <div>
      {fromWhere === "student" ? <StudentSidebar /> : <TPOSidebar />}
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
