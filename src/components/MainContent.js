import React, { useState } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";
import Select from "react-select";

function MainContent() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");

    const fileName = event.target.fileName.value;
    const file = event.target.uploadedFile.files[0];
    console.log(fileName);
    console.log(file);

    const fd = new FormData();
    fd.append("File", file, fileName);

    // console.log(fd.getAll);
  }

  const [labelName, setLabelName] = useState("Upload Here");

  const { branch, sub, room } = useParams();

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>
          Hi in {sub} in {branch} in {room}
        </h1>
        <hr />
        <form type="post" onSubmit={handleSubmit}>
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
              name="uploadedFile"
              required
            />
            <br />
          </div>
          <div className="UploadResodiv2">
            <label htmlFor="fileName">Enter Name for file : </label>
            <input type="text" id="fileName" name="fileName" required />
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
