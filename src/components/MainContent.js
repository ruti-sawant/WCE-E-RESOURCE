import React, { useState } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";
import Select from "react-select";
import axios from "axios";

function MainContent() {
  function handleLinkSubmit(event) {
    event.preventDefault();
    const resoLink = event.target.resoLink.value;
    const desc = event.target.desc.value;
    console.log(resoLink, desc);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");

    // file data
    const fileName = event.target.fileName.value;
    const file = event.target.uploadedFile.files[0];
    console.log(fileName);
    console.log(file);

    //personal data
    const author = {
      name: "Harshal Kodgire",
      PRN: "2019BTECS00029",
      email: "a@b.com",
      username: "harshal.kodgire@walchand"
    };

    const fd = new FormData();
    fd.append("fileToUpload", file, fileName);

    for (let item in author) {
      // console.log(item, "-", author[item]);
      fd.append(item, author[item]);
    }

    // route data
    fd.append("room", room);
    fd.append("branch", branch);
    fd.append("subject", sub);

    // console.log(fd);

    axios
      .post("http://localhost:3000/uploadFile", fd)
      .then((res) => {
        console.log("result", res);
        console.log(res.data);

        alert("File : " + fileName + " uploaded successfully !");
      })
      .catch((err) => {
        console.log("error", err);
      });
    // console.log(fd.getAll);
  }

  const [labelName, setLabelName] = useState("Upload Here");
  const { branch, sub, room } = useParams();

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1>Upload a file</h1>
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
            {/* <label>Select a room : </label>
            <Select className="selectRoom" /> */}
            <label>Location of upload : </label>
            <input
              type="text"
              disabled
              value={"StudentPage/Resources/" + room + "/" + branch + "/" + sub}
            />
            <br />
            <br />
            <button type="submit">Upload</button>
          </div>
        </form>
        <hr />
        <h1>Upload a link</h1>

        <form type="post" onSubmit={handleLinkSubmit}>
          <div style={{ textAlign: "center" }}>
            <label>Enter link for resource : </label>
            <input
              placeholder="e.g - https://xyz.com"
              type="url"
              name="resoLink"
              required
            />
            <br />
            <br />
            <label>Enter description : </label>
            <input placeholder="optional" type="text" name="desc" />
            <br />
            <br />
            <button style={{ display: "inline-block" }} type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainContent;
