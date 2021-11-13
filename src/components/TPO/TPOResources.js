import React, { useState, useEffect } from "react";
import Sidebar from "./TPOSlideBar";
import ResoFolder from "./TPOResoFolder";
// import Rooms from "./Rooms";
import axios from "axios";

function Resources() {
  // const [arr, setArr] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://afternoon-ocean-57702.herokuapp.com/rooms")
  //     .then((data) => {
  //       console.log(data.data);
  //       const Rooms = data.data;
  //       for (let i = 0; i < Rooms.length; i++) {
  //         setArr((arr) =>
  //           arr.concat(<ResoFolder roomName={Rooms[i].roomName} />)
  //         );
  //         // console.log(arr);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <Sidebar />
      <div className="content">
        <p>This is Resources page</p>
        {/* {arr} */}
      </div>
    </div>
  );
}

export default Resources;
