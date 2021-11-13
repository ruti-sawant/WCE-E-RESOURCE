import React from "react";
import Sidebar from "./TPOSlideBar";
import {
  MDBCard,
  // MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
  // MDBBtn
} from "mdb-react-ui-kit";

function TPOInsightsCode() {
  const placementDetails = {
    name: "Nikhil Danapgol",
    branch: "CSE",
    yearOfPassing: "2023",
    company: "Unknown",
    interViewExperience: "dont know",
    linkedinProfile: "abc"
  };
  return (
    <MDBCardGroup>
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{placementDetails.name}</MDBCardTitle>
          <MDBCardText>
            Branch : {placementDetails.branch}
            <br />
            <br />
            Year of Passing : {placementDetails.yearOfPassing}
            <br />
            <br />
            Company : {placementDetails.yearOfPassing}
            <br />
            <br />
            Interview Experience : {placementDetails.yearOfPassing}
            <br />
            <br />
            Linkedin Profile : {placementDetails.yearOfPassing}
            <br />
            <br />
          </MDBCardText>
          {/* <MDBBtn href="#">Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
      {/* ----------------------------------------------------------------------------- */}
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{placementDetails.name}</MDBCardTitle>
          <MDBCardText>
            Branch : {placementDetails.branch}
            <br />
            <br />
            Year of Passing : {placementDetails.yearOfPassing}
            <br />
            <br />
            Company : {placementDetails.yearOfPassing}
            <br />
            <br />
            Interview Experience : {placementDetails.yearOfPassing}
            <br />
            <br />
            Linkedin Profile : {placementDetails.yearOfPassing}
            <br />
            <br />
          </MDBCardText>
          {/* <MDBBtn href="#">Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
      {/* ---------------------------------------------------------------------------- */}
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{placementDetails.name}</MDBCardTitle>
          <MDBCardText>
            Branch : {placementDetails.branch}
            <br />
            <br />
            Year of Passing : {placementDetails.yearOfPassing}
            <br />
            <br />
            Company : {placementDetails.yearOfPassing}
            <br />
            <br />
            Interview Experience : {placementDetails.yearOfPassing}
            <br />
            <br />
            Linkedin Profile : {placementDetails.yearOfPassing}
            <br />
            <br />
          </MDBCardText>
          {/* <MDBBtn href="#">Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

function TPOInsights() {
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

export default TPOInsights;
