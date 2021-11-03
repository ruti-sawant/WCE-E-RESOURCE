import React, { useState } from "react";
import Sidebar from "./Sidebar";

function UploadResource() {
  const [labelName, setLabelName] = useState("Upload Here");

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="UploadResodiv1">
          <label className="UploadResoLabel" htmlFor="uploadButton">
            {labelName}
          </label>
          <input
            type="file"
            hidden
            onChange={(event) => {
              setLabelName(event.target.files[0].name);
            }}
            id="uploadButton"
            className="UploadResoButton"
          />
        </div>
        <div className="UploadResodiv2">
          <label className="UploadResoLabel" htmlFor="uploadButton">
            Upload Here
          </label>
          <input
            type="file"
            hidden
            id="uploadButton"
            className="UploadResoButton"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadResource;
