import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./ShowYourResources.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

function ShowYourResourcesCode(props) {
  function handleDelete() {
    const receivedObj = resources[0].idObj;

    let tempRoute = "";

    const dataToSend = {};
    if (receivedObj.driveId) {
      tempRoute = "uploadFile";
      dataToSend.mongoId = receivedObj.mongoId;
      dataToSend.driveId = receivedObj.driveId;
    } else {
      tempRoute = "uploadLink";
      dataToSend.mongoId = receivedObj.mongoId;
    }

    axios
      .delete("https://afternoon-ocean-57702.herokuapp.com/" + tempRoute, {
        data: dataToSend
      })
      .then((data) => {
        console.log(data);
        alert("Deleted resource successsfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    //to reload currentPage
  }

  const resources = [
    {
      srNO: props.srNO,
      resourceName: props.data.resourceName,
      view: props.data.driveLink ? (
        <a href={props.data.driveLink.webViewLink}>View</a>
      ) : (
        <a href={props.data.externalLink.link}>View</a>
      ),
      delete: "Delete",
      idObj: props.data.driveLink
        ? { driveId: props.data.driveLink.id, mongoId: props.data._id }
        : { mongoId: props.data._id },
      download: props.data.driveLink ? (
        <a href={props.data.driveLink.webContentLink}>Download</a>
      ) : (
        "-"
      ),
      date: props.data.timestamp,
      room: props.data.room
    }
  ];

  return (
    <div>
      <tr>
        <td className="ShowYourResources_td">{resources[0].srNO}</td>
        <td className="ShowYourResources_td">{resources[0].resourceName}</td>
        <td className="ShowYourResources_td">{resources[0].view}</td>
        <td className="ShowYourResources_td">{resources[0].download}</td>
        <td className="ShowYourResources_td">{resources[0].date}</td>
        <td className="ShowYourResources_td">{resources[0].room}</td>

        <td className="ShowYourResources_td">
          <button onClick={handleDelete}>{resources[0].delete}</button>
        </td>
      </tr>
      <hr />
    </div>
  );
}

// -------------------------------------------------------------------

function ShowYourResources() {
  const author = {
    name: "Harshal Kodgire",
    PRN: "2019BTECS00029",
    email: "a@b.com",
    username: "harshal.kodgire@walchand"
  };

  const [arr, setArr] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    axios
      .get("https://afternoon-ocean-57702.herokuapp.com/login", {
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
        if (res.data.loggedIn === false) setRole("invalid");
        //to get resources
        else {
          setRole(res.data.decodedData.role);
          if (res.data.decodedData.role === "faculty") {
            axios
              .get("https://afternoon-ocean-57702.herokuapp.com/resources/")
              .then((data) => {
                const RecievedResources = data.data;

                for (let i = 0; i < RecievedResources.length; i++) {
                  setArr((arr) =>
                    arr.concat(
                      <ShowYourResourcesCode
                        data={RecievedResources[i]}
                        srNO={i + 1}
                      />
                    )
                  );
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            axios
              .get(
                "https://afternoon-ocean-57702.herokuapp.com/resources/users/" +
                  author.username //change to actual username recieved from login route
              )
              .then((data) => {
                const RecievedResources = data.data;

                for (let i = 0; i < RecievedResources.length; i++) {
                  setArr((arr) =>
                    arr.concat(
                      <ShowYourResourcesCode
                        data={RecievedResources[i]}
                        srNO={i + 1}
                      />
                    )
                  );
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
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
          <Sidebar />
          <div className="content ">
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Resources uploaded by you :-
            </h2>
            <br />
            <tr>
              <td className="ShowYourResources_td">SrNo</td>
              <td className="ShowYourResources_td">Resource Name</td>
              <td className="ShowYourResources_td">View</td>
              <td className="ShowYourResources_td">Download</td>
              <td className="ShowYourResources_td">Date</td>
              <td className="ShowYourResources_td">Room</td>
              <td className="ShowYourResources_td">Delete</td>
            </tr>
            <hr />
            {arr}
            <br />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowYourResources;
