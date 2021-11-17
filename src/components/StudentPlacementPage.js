import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import axios from "axios";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function StudentPlacementPage() {
  function handleViewInsights() {
    setClick(true);
  }

  const [click, setClick] = useState(false);
  const [role, setRole] = useState("");
  const [notificationArray, setNotificationArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://afternoon-ocean-57702.herokuapp.com/login", {
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
        if (res.data.loggedIn === false) setRole("invalid");
        else {
          setRole(res.data.decodedData.role);
          axios
            .get("https://afternoon-ocean-57702.herokuapp.com/notification")
            .then((res) => {
              console.log(res);
              let receivedData = res.data;
              receivedData.reverse();
              for (let i = 0; i < receivedData.length; i++) {
                setNotificationArray((arr) =>
                  arr.concat(
                    <div>
                      <p
                        style={{ display: "inline-block", marginBottom: "2px" }}
                      >
                        <b>{receivedData[i].message} </b>
                        <small style={{ fontSize: "0.9rem", color: "grey" }}>
                          {timeSince(receivedData[i].time)}
                        </small>
                      </p>
                    </div>
                  )
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
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
      <Sidebar />
      <div className="content">
        <div style={{ textAlign: "center", color: "red", fontSize: "20px" }}>
          {notificationArray}
          <br />
          <hr />
          <br />
          <button onClick={handleViewInsights}>View Placement Insights</button>
          {click ? <Redirect to="/TPOPage/TPOInsightsView/student" /> : null}
        </div>
      </div>
    </div>
  );
}

export default StudentPlacementPage;
