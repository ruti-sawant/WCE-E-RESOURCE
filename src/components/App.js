import React, { useState } from "react";
import StudentLogin from "./StudentLogin";
import StudentPage from "./StudentPage";
import Resources from "./Resources";
import ContactUs from "./ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
function App() {
  const [isStudentLogin, setStudentLogin] = useState(false);

  return (
    // <div className="Home">
    <div>
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="Home">
              <div className="div1">
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
                <footer>© Walchand College of Engineering, Sangli</footer>
              </div>
              {isStudentLogin ? <Redirect to="/StudentLogin" /> : null}
            </div>
          </Route>
          <Route exact path="/StudentLogin">
            <StudentLogin />
          </Route>
          <Route exact path="/StudentPage">
            <StudentPage />
          </Route>
          <Route exact path="/StudentPage/Resources">
            <Resources />
          </Route>
          <Route exact path="/StudentPage/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
