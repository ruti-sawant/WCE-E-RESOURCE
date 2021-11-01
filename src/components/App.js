import React, { useState } from "react";
import Sidebar from "./Sidebar";
import StudentLogin from "./StudentLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
function App() {
  const [isStudentLogin, setStudentLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="div1">
              <StudentLogin />
              <img
                className="wceimg"
                src="https://uni.wcoeapps.in/site/static/images/wcoe.jpg"
                alt="wce"
              />
              <h1 style={{ color: "white" }} className="heading">
                WCE E-RESOURCE
              </h1>
            </div>
            <hr />
            <div className="mainButtons">
              <button
                className="studentButton"
                onClick={() => {
                  setStudentLogin(true);
                }}
              >
                Student Login
              </button>
              <button className="facultyButton">Faculty Login</button>
              <button className="TPOButton">TPO Login</button>
            </div>
            {isStudentLogin ? <Redirect to="/StudentLogin" /> : null}
          </Route>
          <Route path="/StudentLogin">
            <StudentLogin />
          </Route>
        </Switch>
      </Router>

      <footer>© Walchand College of Engineering, Sangli</footer>
    </div>
  );
}
export default App;
