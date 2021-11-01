import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "../SidebarStyles.css";
function Sidebar() {
  return (
    <div className="sidebarMain">
      <Navbar />
      <div className="sidebar">
        <NavLink activeClassName="active" exact to="/StudentPage">
          Home
        </NavLink>
        <NavLink activeClassName="active" exact to="/profile">
          Profile
        </NavLink>
        <NavLink activeClassName="active" exact to="/StudentPage/Resources">
          Resources
        </NavLink>
        <NavLink activeClassName="active" exact to="/uploadResource">
          Upload Resource
        </NavLink>
        <NavLink activeClassName="active" exact to="/placment">
          Placement
        </NavLink>
        <NavLink activeClassName="active" exact to="/About">
          About
        </NavLink>
        <NavLink activeClassName="active" exact to="/StudentPage/ContactUS">
          Contact Us
        </NavLink>
        <NavLink activeClassName="active" exact to="/Logout">
          Logout
        </NavLink>
      </div>
      {/* <div className="content">
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
      </div> */}
    </div>
  );
}

export default Sidebar;
