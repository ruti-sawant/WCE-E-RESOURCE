import React from "react";
import Sidebar from "./TPOSlideBar";

function Notification() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h1 style={{ align: "center" }}>Welcome to Notification page</h1>
        <br />
        <label style={{ textAlign: "center" }}>Enter new notification</label>
        <br />
        <br />
        <textarea
          row="30"
          cols="30"
          style={{ resize: "none", width: "300px", height: "100px" }}
        ></textarea>
      </div>
    </div>
  );
}

export default Notification;
