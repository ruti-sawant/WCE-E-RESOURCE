import React from "react";
import "./LoginStyles.css";
function StudentLogin() {
  return (
    <div className="login">
      <h2 id="headerTitle">LOGIN</h2>
      <form id="studentLoginForm">
        {/* <label>Username</label> */}
        <input className="row " placeholder="Username"></input>
        {/* <label>Password</label> */}
        <input className="row" placeholder="Password" type="password"></input>
        <div id="button" class="row">
          <button>Login</button>
          <br />
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
