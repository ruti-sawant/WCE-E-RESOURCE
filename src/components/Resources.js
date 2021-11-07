import React from "react";
import Sidebar from "./Sidebar";
import ResoFolder from "./ResoFolder";

function Resources() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <p>This is Resources page</p>
        <ResoFolder roomName="SEM 1" />
        <ResoFolder roomName="SEM 2" />
        <ResoFolder roomName="SEM 3" />
        <ResoFolder roomName="SEM 4" />
        <ResoFolder roomName="SEM 5" />
        <ResoFolder roomName="SEM 6" />
        <ResoFolder roomName="SEM 7" />
        <ResoFolder roomName="SEM 8" />
        <ResoFolder roomName="CP" />
        <ResoFolder roomName="Robotics" />
      </div>
    </div>
  );
}

export default Resources;
