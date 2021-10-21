import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="div1">
        <img
          className="wceimg"
          src="https://uni.wcoeapps.in/site/static/images/wcoe.jpg"
          alt="wce"
        />
        <h1 className="heading">WCE E-RESOURCE</h1>
      </div>
      <hr />
      <div className="mainButtons">
        <button className="studentButton">Student Login</button>
        <button className="facultyButton">Faculty Login</button>
        <button className="TPOButton">TPO Login</button>
      </div>
      <footer>© Walchand College of Engineering, Sangli</footer>
    </div>
  );
}
