import React from "react";

function AddNewFolder(props) {
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
  );
}

export default AddNewFolder;
