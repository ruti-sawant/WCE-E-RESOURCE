import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./ShowYourResources.css";
import axios from "axios";

function ShowYourResourcesCode(props) {
  console.log(props);
  const resources = [
    {
      srNO: "1",
      resourceName: props.data.resourceName,
      view: props.data.driveLink ? (
        <a href={props.data.driveLink.webViewLink}>View</a>
      ) : (
        <a href={props.data.externalLink.link}>View</a>
      ),
      delete: "abc",
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
        <br />
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].srNO}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].resourceName}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].view}
        </td>

        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].delete}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].download}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].date}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "180px",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].room}
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

  useEffect(() => {
    axios
      .get(
        "https://afternoon-ocean-57702.herokuapp.com/resources/users/" +
          author.username
      )
      .then((data) => {
        const RecievedResources = data.data;

        for (let i = 0; i < RecievedResources.length; i++) {
          setArr((arr) =>
            arr.concat(<ShowYourResourcesCode data={RecievedResources[i]} />)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="content ">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Resources uploaded by you :-
        </h2>
        <br />
        <tr>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            SrNo
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Resource Name
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            View
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Delete
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Download
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Date
          </td>
          <td
            style={{
              textAlign: "center",
              width: "180px",
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Room
          </td>
        </tr>
        <hr />
        {arr}

        <br />
      </div>
    </div>
  );
}

export default ShowYourResources;
