import React from "react";
import Sidebar from "./Sidebar";

function StudentPage() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <p>This is Home page</p>
      </div>
    </div>
  );
}

export default StudentPage;
