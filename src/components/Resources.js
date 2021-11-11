import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ResoFolder from "./ResoFolder";
// import Rooms from "./Rooms";
import axios from "axios";
import AddNewFolder from "./AddNewFolder";

function Resources() {
  const [arr, setArr] = useState([]);

  // function addNewFolder() {
  // setArr((arr) => arr.concat(<ResoFolder roomName="Nick" />));
  // console.log("arr", arr);
  // for (let i = 0; i < Rooms.length; i++) {
  //   setArr((arr) => arr.concat(<ResoFolder roomName={Rooms[i]} />));
  // }
  // }

  // for (let i = 0; i < Rooms.length; i++) {
  //   setArr((arr) => arr.concat(<ResoFolder roomName={Rooms[i]} />));
  // }

  useEffect(() => {
    axios
      .get("https://afternoon-ocean-57702.herokuapp.com/rooms")
      .then((data) => {
        console.log(data.data);
        const Rooms = data.data;
        for (let i = 0; i < Rooms.length; i++) {
          setArr((arr) =>
            arr.concat(<ResoFolder roomName={Rooms[i].roomName} />)
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
      <div className="content">
        <p>This is Resources page</p>
        {arr}
        <AddNewFolder Name="Add" route="none" />
      </div>
    </div>
  );
}

export default Resources;
