import React from "react";
import Sidebar from "./Sidebar";
import Select from "react-select";
import "./NewLoginDetails.css";
function LoginDetails() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div
          // className="TPOPI"
          style={{
            borderStyle: "solid",
            borderWidth: "0.5px",
            marginTop: "40px",
            textAlign: "center",
            marginLeft: "20%",
            marginRight: "20%"
          }}
        >
          <br />
          <form style={{ textAlign: "center" }} type="post">
            <label htmlFor="fName">Enter first Name : </label>
            <input type="text" id="fName" required></input>
            <br />
            <br />
            <label htmlFor="mName">Enter middle Name : </label>
            <input type="text" id="mName"></input>
            <br />
            <br />
            <label htmlFor="lName">Enter last Name : </label>
            <input type="text" id="lName" required></input>
            <br />
            <br />
            <label htmlFor="prn">Enter PRN : </label>
            <input type="text"></input>
            <br />
            <br />
            <label htmlFor="email">Enter Email : </label>
            <input type="text" required></input>
            <br />
            <br />
            <label htmlFor="contactNo">Enter Contact Number : </label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="10 digit number"
            ></input>
            <br />
            <br />
            <label htmlFor="branch ">Enter Department: </label>
            <input type="text" required></input>
            <br />
            <br />
            <label htmlFor="role">Select your role : </label>
            <Select
              id="selectRole"
              className="selectRole"
              required
              options={[
                { label: "student", value: "1" },
                { label: "faculty", value: "2" },
                { label: "TPO", value: "3" }
              ]}
            />
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

export default LoginDetails;
