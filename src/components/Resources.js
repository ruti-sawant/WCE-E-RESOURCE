import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ResoFolder from "./ResoFolder";
import Rooms from "./Rooms";

function Resources() {
  const [arr, setArr] = useState([]);

  function addNewFolder() {
    // console.log("This also called");
    // setArr((arr) => arr.concat(<ResoFolder roomName="Nick" />));
    // console.log("arr", arr);

    for (let i = 0; i < Rooms.length; i++) {
      setArr((arr) => arr.concat(<ResoFolder roomName={Rooms[i]} />));
    }
  }

  // for (let i = 0; i < Rooms.length; i++) {
  //   setArr((arr) => arr.concat(<ResoFolder roomName={Rooms[i]} />));
  // }

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
        {addNewFolder}
        <button onClick={addNewFolder}>Add</button>
        {arr}
      </div>
    </div>
  );
}

export default Resources;
