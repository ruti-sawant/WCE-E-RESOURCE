import React from "react";
import Sidebar from "./Sidebar";
import "./ShowYourResources.css";

function ShowYourResourcesCode() {
  const resources = [
    {
      srNO: "1",
      resourceName: "CNLab",
      view: "abc",
      delete: "abc",
      download: "abc",
      date: "abc"
    },
    {
      srNO: "2",
      resourceName: "DAA",
      resourceLink: "xyz",
      view: "abc",
      delete: "abc",
      download: "abc",
      date: "abc"
    }
  ];

  return (
    <div>
      <tr>
        <td style={{ textAlign: "center", width: "150px" }}>
          {resources[0].srNO}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].resourceName}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].view}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].delete}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].download}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].date}
        </td>
      </tr>
    </div>
  );
}

function ShowYourResources() {
  return (
    <div>
      <Sidebar />
      <div className="content ">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Resources uploaded by you :-
        </h2>
        <br />
        <table>
          <tr>
            <th style={{ textAlign: "center", width: "120px" }}>SrNo</th>
            <th style={{ textAlign: "center", width: "500px" }}>
              Resource Name
            </th>
            <th style={{ textAlign: "center", width: "500px" }}>View</th>
            <th style={{ textAlign: "center", width: "500px" }}>Delete</th>
            <th style={{ textAlign: "center", width: "500px" }}>Download</th>
            <th style={{ textAlign: "center", width: "500px" }}>Date</th>
          </tr>
        </table>
        <br />
        <ShowYourResourcesCode />
        <ShowYourResourcesCode />
        <ShowYourResourcesCode />
      </div>
    </div>
  );
}

export default ShowYourResources;

// function UploadResource() {
//   const [labelName, setLabelName] = useState("Upload Here");

//   return (
//     <div>
//       <Sidebar />
//       <div className="content">
//         {/* <div className="UploadResodiv1"> */}
//         <form>
//           <div className="UploadResodiv1">
//             <h3 style={{ textAlign: "center" }}>Select a file ...</h3>
//             <label
//               className="UploadResoLabel"
//               htmlFor="uploadButton"
//               // style={{ backgroundImage: "url(./upload2.png)" }}
//             >
//               {labelName}
//             </label>
//             <input
//               type="file"
//               hidden
//               onChange={(event) => {
//                 if (event.target.files[0].name)
//                   setLabelName(event.target.files[0].name);
//               }}
//               id="uploadButton"
//               className="UploadResoButton"
//             />
//             <br />
//           </div>
//           <div className="UploadResodiv2">
//             <label htmlFor="fileName">Enter Name for file : </label>
//             <input type="text" id="fileName" required />
//             <br />
//             <br />
//             <label>Select a room : </label>
//             <Select className="selectRoom" />
//             <br />
//             <br />
//             <button type="submit">Upload</button>
//           </div>
//         </form>
//         {/* </div> */}
//         {/* <br /> */}
//         <div style={{ textAlign: "center" }}>
//           <h3>Resources uploaded by you :-</h3>
//           <ul style={{ display: "inline-block" }}>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UploadResource;
