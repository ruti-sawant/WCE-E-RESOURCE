import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Select from "react-select";
function UploadResource() {
  const [labelName, setLabelName] = useState("Upload Here");

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="UploadResodiv1">
          <form>
            <h3 style={{ textAlign: "center" }}>Select a file ...</h3>
            <label
              className="UploadResoLabel"
              htmlFor="uploadButton"
              // style={{ backgroundImage: "url(./upload2.png)" }}
            >
              {labelName}
            </label>
            <input
              type="file"
              hidden
              onChange={(event) => {
                if (event.target.files[0].name)
                  setLabelName(event.target.files[0].name);
              }}
              id="uploadButton"
              className="UploadResoButton"
            />
            <br />
            <label htmlFor="fileName">Enter Name for file : </label>
            <input type="text" id="fileName" required />
            <br />
            <br />
            <label>Select a room : </label>
            <Select className="selectRoom" />
            <br />
            <br />
            <button type="submit">Upload</button>
          </form>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <h3>Resources uploaded by you :-</h3>
          <ul style={{ display: "inline-block" }}>
            <li>Nikhil</li>
            <li>Nikhil</li>
            <li>Nikhil</li>
            <li>Nikhil</li>
            <li>Nikhil</li>
            <li>Nikhil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UploadResource;
