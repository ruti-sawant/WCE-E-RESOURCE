import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";

function StudentPlacementPage() {
  function handleViewInsights() {
    setClick(true);
  }

  const [click, setClick] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div style={{ textAlign: "center", color: "red", fontSize: "20px" }}>
          <p>This is Notification 1</p>
          <p>This is Notification 2</p>
          <p>This is Notification 3</p>
          <p>This is Notification 4</p>
          <hr />
          <button onClick={handleViewInsights}>View Placement Insights</button>
          {click ? <Redirect to="/TPOPage/TPOInsightsView/student" /> : null}
        </div>
      </div>
    </div>
  );
}

export default StudentPlacementPage;
