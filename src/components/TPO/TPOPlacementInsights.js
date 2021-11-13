import React from "react";
import Select from "react-select";
import Sidebar from "./TPOSlideBar";
import "./TPOPlacementInsights.css";

function TPOPlacementInsights() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div
          className="TPOPI"
          style={{
            borderStyle: "solid",
            borderWidth: "0.5px",
            marginTop: "40px"
          }}
        >
          <h1 style={{ textAlign: "center" }}>PLACEMENT INSIGHTS</h1>
          <br />
          <form style={{ textAlign: "center" }} type="post">
            <label htmlFor="fName">Enter first Name : </label>
            <input type="text" id="fName"></input>
            <br />
            <br />
            <label htmlFor="mName">Enter middle Name : </label>
            <input type="text" id="mName"></input>
            <br />
            <br />
            <label htmlFor="lName">Enter last Name : </label>
            <input type="text" id="lName"></input>
            <br />
            <br />
            <label htmlFor="branch ">Select Branch : </label>
            <Select
              id="companySelect"
              className="branchSelect"
              options={[
                { label: "CSE", value: "CSE" },
                { label: "IT", value: "IT" },
                { label: "ELECTRONICS", value: "ELECTRONICS" },
                { label: "ELECTRICAL", value: "ELECTRICAL" },
                { label: "MECH", value: "MECH" },
                { label: "CIVIL", value: "CIVIL" }
              ]}
            />
            <br />
            <br />
            <label>Enter year of passing : </label>
            <input type="number" id="yearOfPassing"></input>
            <br />
            <br />
            <label>Select a company : </label>
            <Select
              id="companySelect"
              className="companySelect"
              options={[
                { label: "ONE", value: "1" },
                { label: "TWO", value: "2" }
              ]}
            />
            <br />
            <br />
            <label htmlFor="lName">Add new company : </label>
            <input
              type="text"
              id="newCompany"
              placeholder="Leave empty if selected "
            ></input>
            <br />
            <br />
            <label>Select interview experience : </label>
            <label
              htmlFor="interviewExp"
              style={{
                borderStyle: "solid",
                padding: "0.5%",
                borderWidth: "0.5px"
              }}
            >
              Choose file
            </label>
            <input type="file" id="interviewExp" hidden></input>
            <br />
            <br />
            <label>Enter linkedin profile link : </label>
            <input type="url" id="linkedinUrl"></input>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default TPOPlacementInsights;
