import React from "react";
import Navbar from "./Navbar";
import "../SidebarStyles.css";
function Sidebar2() {
  return (
    <div>
      <div className="sidebar">
        <a className="active" href="#home">
          Home
        </a>
        <a href="https://www.w3schools.com/">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="content">
        <Navbar />
        <h2>Responsive Sidebar Example</h2>
        <p>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </p>
        <p>
          We have also added a media query for screens that are 400px or less,
          which will vertically stack and center the navigation links.
        </p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </div>
  );
}

export default Sidebar2;
