import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

function InsideSubject(props) {
  const [click, setClick] = useState(false);
  const { room } = useParams();

  function goto() {
    let routeUrl =
      "/StudentPage/Resources/subFolder/" + room + "/" + props.subName;
    console.log(routeUrl);
    return <Redirect to={routeUrl} />;
  }

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
        // src={require("./folder2.jpg")}
        src="https://lh3.googleusercontent.com/d/1YJuoWBEdEQC4bwtpk7Qdq92cwRzw-XWD=s220?authuser=0"
        alt="img"
        width="100"
        height="100"
        onClick={() => {
          console.log("Folder opened");
          setClick(true);
        }}
      />
      {click ? goto() : null}
      <label
        style={{
          // for adding ellipsis
          // textOverflow: "ellipsis",
          // display: "inline-block",
          // overflow: "hidden",
          // whiteSpace: "nowrap",

          textOverflow: "clip",
          maxWidth: "100px",
          maxHeight: "100px",
          height: "20px"
        }}
      >
        {props.subName}
      </label>
    </div>
  );
}

function Subjects() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <InsideSubject subName="OS" />
        <InsideSubject subName="CN" />
        <InsideSubject subName="DBMS" />
      </div>
    </div>
  );
}

export default Subjects;
