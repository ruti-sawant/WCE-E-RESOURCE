import React, { useState } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";
import Select from "react-select";

function MainContent() {
  const [labelName, setLabelName] = useState("Upload Here");

  const { room, sub } = useParams();

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>
          Hi in {sub} in {room}
        </h1>
        <hr />
        <form>
          <div className="UploadResodiv1">
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
          </div>
          <div className="UploadResodiv2">
            <label htmlFor="fileName">Enter Name for file : </label>
            <input type="text" id="fileName" required />
            <br />
            <br />
            <label>Select a room : </label>
            <Select className="selectRoom" />
            <br />
            <br />
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainContent;
