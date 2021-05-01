import { useState } from "react";
import "./app.scss";
import { Blogs, Contact, Intro, Menu, Navbar, Portfolio } from "./components";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="app">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Blogs />
        <Contact />
      </div>
    </div>
  );
}

export default App;
