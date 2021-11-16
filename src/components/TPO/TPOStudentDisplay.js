import React from "react";
import Sidebar from "./TPOSlideBar";
import "./TPOStudentDisplay.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

function TPOInsightsCode() {
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
      name: "Nikhil Danapgol",
      branch: "CSE",
      yearOfPassing: "2023",
      company: "Unknown",
      interViewExperience: "dont know",
      linkedinProfile: "abc"
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
  return (
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
              <h3>{placementDetails.name}</h3>
              <h3>Company : {placementDetails.company}</h3>
              <h3>Branch : {placementDetails.branch}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <h3>Year of Passing : {placementDetails.yearOfPassing}</h3>
              <h3>
                Interview Experience : {placementDetails.interViewExperience}
              </h3>
              <h3>Linkedin Profile : {placementDetails.linkedinProfile}</h3>
            </BackSide>
          </Flippy>
        </div>
      </div>
      <div class="TPOColumn">
        <div class="card">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
              <h3>{placementDetails.name}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <p>Branch : {placementDetails.branch}</p>
              <p>Year of Passing : {placementDetails.yearOfPassing}</p>
              <p>Company : {placementDetails.company}</p>
              <p>
                Interview Experience : {placementDetails.interViewExperience}
              </p>
              <p>Linkedin Profile : {placementDetails.linkedinProfile}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
      <div class="TPOColumn">
        <div class="card">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
              <h3>{placementDetails.name}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <p>Branch : {placementDetails.branch}</p>
              <p>Year of Passing : {placementDetails.yearOfPassing}</p>
              <p>Company : {placementDetails.company}</p>
              <p>
                Interview Experience : {placementDetails.interViewExperience}
              </p>
              <p>Linkedin Profile : {placementDetails.linkedinProfile}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
      <div class="TPOColumn">
        <div class="card">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
              <h3>{placementDetails.name}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <p>Branch : {placementDetails.branch}</p>
              <p>Year of Passing : {placementDetails.yearOfPassing}</p>
              <p>Company : {placementDetails.company}</p>
              <p>
                Interview Experience : {placementDetails.interViewExperience}
              </p>
              <p>Linkedin Profile : {placementDetails.linkedinProfile}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
      <div class="TPOColumn">
        <div class="card">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
              <h3>{placementDetails.name}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <p>Branch : {placementDetails.branch}</p>
              <p>Year of Passing : {placementDetails.yearOfPassing}</p>
              <p>Company : {placementDetails.company}</p>
              <p>
                Interview Experience : {placementDetails.interViewExperience}
              </p>
              <p>Linkedin Profile : {placementDetails.linkedinProfile}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
      <div class="TPOColumn">
        <div class="card">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
              <h3>{placementDetails.name}</h3>
            </FrontSide>
            <BackSide style={{ backgroundColor: "white" }}>
              <p>Branch : {placementDetails.branch}</p>
              <p>Year of Passing : {placementDetails.yearOfPassing}</p>
              <p>Company : {placementDetails.company}</p>
              <p>
                Interview Experience : {placementDetails.interViewExperience}
              </p>
              <p>Linkedin Profile : {placementDetails.linkedinProfile}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
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
