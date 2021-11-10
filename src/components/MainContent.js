import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";
import axios from "axios";

function DisplayReso(props) {
  if (props.data.driveLink) {
    return (
      <div>
        <p style={{ display: "inline-block" }}>
          {props.data.resourceName + " : "}
        </p>
        <a href={props.data.driveLink.webViewLink}>view</a>
        <a href={props.data.driveLink.webContentLink}>Download</a>
        <p>{props.data.author.name}</p>
        <p>{props.data.timestamp}</p>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.data.resourceName}</p>
        <p>{props.data.externalLink.description}</p>
        <a href={props.data.externalLink.link}>Link</a>
        <p>{props.data.author.name}</p>
        <p>{props.data.timestamp}</p>
        <hr />
      </div>
    );
  }
}

function MainContent() {
  function handleLinkSubmit(event) {
    event.preventDefault();
    const resoLink = event.target.resoLink.value;
    const desc = event.target.desc.value;
    const linkName = event.target.linkName.value;
    const author = {
      name: "Harshal Kodgire",
      PRN: "2019BTECS00029",
      email: "a@b.com",
      username: "harshal.kodgire@walchand"
    };

    const fd = new FormData();
    fd.append("link", resoLink);
    fd.append("linkName", linkName);
    fd.append("description", desc);

    for (let item in author) {
      fd.append(item, author[item]);
    }

    // route data
    fd.append("room", room);
    fd.append("branch", branch);
    fd.append("subject", sub);
    axios
      .post("http://localhost:3000/uploadLink", fd)
      .then((res) => {
        console.log("result", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
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
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/resources/rooms/" +
          room +
          "_" +
          branch +
          "_" +
          sub
      )
      .then((data) => {
        const RecievedResources = data.data;
        console.log(data.data);

        // console.log(data.data[0].driveLink);

        for (let i = 0; i < RecievedResources.length; i++) {
          setArr((arr) =>
            // arr.concat(<ResoFolder roomName={Rooms[i].roomName} />)
            // arr.concat(<h1>{RecievedResources[i].driveLink.webViewLink}</h1>)
            arr.concat(<DisplayReso data={RecievedResources[i]} />)
          );
        }

        //end
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="content">
        {arr}
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
            <label>Enter Name : </label>
            <input
              placeholder="Short Name about link"
              type="text"
              name="linkName"
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
