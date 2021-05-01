import React from "react";
import "./intro.scss";
import profile from "../../img/photo.png";
import { ExpandMore } from "@material-ui/icons";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Sintha Dwiferma Sinurat</h1>
          <h3>
            <span>JavaScript </span> Developer
          </h3>
          <p>
            I'm learning JavaScript. I am building user interfaces components
            using React.js. On the back-end, I use Express.js, a framework for
            Node.js. For mobile applications, I use React Native.
          </p>
        </div>
        <a href="#portfolio">
          <ExpandMore className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
