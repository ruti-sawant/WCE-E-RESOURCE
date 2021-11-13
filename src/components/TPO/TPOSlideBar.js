import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import "/src/SidebarStyles.css";
function Sidebar() {
  return (
    <div className="sidebarMain">
      <Navbar />
      <div className="sidebar">
        <NavLink activeClassName="active" exact to="/TPOPage/Profile">
          Profile
        </NavLink>
        <NavLink activeClassName="active" exact to="/TPOPage/TPOResources">
          Resources
        </NavLink>
        <NavLink activeClassName="active" exact to="/TPOPage/PlacementInsights">
          Placement Insights
        </NavLink>
        <NavLink activeClassName="active" exact to="/TPOPage/About">
          About
        </NavLink>
        <NavLink activeClassName="active" exact to="/TPOPage/ContactUs">
          Contact Us
        </NavLink>
        <NavLink activeClassName="active" exact to="/TPOPage/Logout">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
