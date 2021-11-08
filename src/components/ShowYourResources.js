import React from "react";
import Sidebar from "./Sidebar";
import "./ShowYourResources.css";
// import ShowYourResourcesCode from "./ShowYourResourcesCode";

function ShowYourResourcesCode() {
  const resources = [
    {
      srNO: "1222434343535353535522322",
      resourceName: "CNLab",
      resourceLink: "abc"
    },
    {
      srNO: "2",
      resourceName: "DAA",
      resourceLink: "xyz"
    }
  ];

  return (
    <div>
      {/* <div className="showYourResources1">
        <h4 style={{ display: "inline-block" }}>{resources[0].srNO}</h4>
      </div>
      <div className="showYourResources2">
        <h4 style={{ display: "inline-block" }}>{resources[0].resourceName}</h4>
      </div>
      <div className="showYourResources3">
        <h4 style={{ display: "inline-block" }}>{resources[0].resourceLink}</h4>
      </div> */}
      <table>
        <tr></tr>
      </table>
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
            <th style={{ textAlign: "center", width: "10%" }}>SrNo</th>
            <th style={{ textAlign: "center", width: "40%" }}>Resource Name</th>
            <th style={{ textAlign: "center", width: "40%" }}>Resource Link</th>
          </tr>
        </table>
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
