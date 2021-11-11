import React, { useState } from "react";
import axios from "axios";

function AddNewFolder(props) {
  const [showInput, setShowInput] = useState(true);

  return (
    <div
      style={{
        height: "140px",
        width: "100px",
        textAlign: "center",
        display: "inline-block"
      }}
    >
      <img
        src="https://lh3.googleusercontent.com/d/1QSzMI9u9Av7iLPRaEgVFt1ItXeI2DZq3=s220?authuser=0"
        alt="img"
        width="100"
        height="100"
        onClick={() => {
          console.log("Add new Folder clicked");
          const roomName = prompt("Enter the name for new room : ");
          console.log(roomName);
          console.log(props);

          axios
            .post(
              "https://afternoon-ocean-57702.herokuapp.com/rooms/" +
                props.route +
                roomName
            )
            .then((res) => {
              console.log("result", res);
              // console.log(res.data);
              alert("Room : " + roomName + " created successfully !");
            })
            .catch((err) => {
              console.log("error", err);
            });
        }}
      />
      <label
        style={{
          maxWidth: "100px",
          maxHeight: "100px",
          height: "20px"
        }}
      >
        {props.Name}
      </label>
    </div>
    // {showInput ? <input type="text" /> : null}
  );
}

export default AddNewFolder;
