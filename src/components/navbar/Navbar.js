import React from "react";
import "./navbar.scss";

function Navbar({ navOpen, setNavOpen }) {
  return (
    <div className={`navbar${navOpen ? " active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            sintha
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
